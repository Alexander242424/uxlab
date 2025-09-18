import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!, // "us21"
});

export async function POST(request: NextRequest) {
  try {
    // Check environment variables
    if (!process.env.MAILCHIMP_API_KEY) {
      console.error("MAILCHIMP_API_KEY is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.MAILCHIMP_SERVER_PREFIX) {
      console.error("MAILCHIMP_SERVER_PREFIX is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.MAILCHIMP_AUDIENCE_ID) {
      console.error("MAILCHIMP_AUDIENCE_ID is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    // Validation email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    console.log("Attempting to subscribe:", email);
    console.log("Using audience ID:", process.env.MAILCHIMP_AUDIENCE_ID);

    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
      }
    );

    console.log("Successfully subscribed:", response);
    return NextResponse.json({ success: true, response });
  } catch (err: unknown) {
    // Type guard to check if error has expected properties
    const isMailchimpError = (error: unknown): error is {
      message?: string;
      status?: number;
      title?: string;
      detail?: string;
      response?: {
        body?: {
          title?: string;
          detail?: string;
        };
      };
    } => {
      return typeof error === 'object' && error !== null;
    };

    if (isMailchimpError(err)) {
      console.error("Mailchimp error details:", {
        message: err.message,
        status: err.status,
        title: err.title,
        detail: err.detail,
        response: err.response?.body
      });

      // Handle specific Mailchimp errors
      const errorResponse = err.response?.body;
      
      if (errorResponse?.title === "Member Exists") {
        return NextResponse.json(
          { 
            success: false, 
            error: "This email is already subscribed to our newsletter",
            code: "MEMBER_EXISTS"
          },
          { status: 409 } // Conflict status for existing member
        );
      }

      if (errorResponse?.title === "Invalid Resource") {
        return NextResponse.json(
          { 
            success: false, 
            error: "Invalid email address format",
            code: "INVALID_EMAIL"
          },
          { status: 400 }
        );
      }

      if (errorResponse?.title === "API Key Invalid") {
        return NextResponse.json(
          { 
            success: false, 
            error: "Server configuration error",
            code: "API_ERROR"
          },
          { status: 500 }
        );
      }

      // Generic error handling
      return NextResponse.json(
        { 
          success: false, 
          error: errorResponse?.detail || err.message || "Failed to subscribe",
          code: "UNKNOWN_ERROR"
        },
        { status: 400 }
      );
    }

    // Fallback for unknown error types
    console.error("Unknown error:", err);
    return NextResponse.json(
      { 
        success: false, 
        error: "An unexpected error occurred",
        code: "UNKNOWN_ERROR"
      },
      { status: 500 }
    );
  }
}
