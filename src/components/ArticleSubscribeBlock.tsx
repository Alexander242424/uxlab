"use client";
import { useState } from "react";
import ClickHandIcon from "@/assets/click-hand.svg";
import ArrowRightUpIcon from "@/assets/arrow-up-right.svg";
import LinkIcon from "@/assets/link-icon.svg";
import ArrowRightSVG from "@/assets/arrow-right.svg";

const ArticleSubscribeBlock = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Successfully subscribed!");
        setEmail("");
      } else {
        // Handle specific error codes
        if (data.code === "MEMBER_EXISTS") {
          setMessage("This email is already subscribed to our newsletter");
        } else if (data.code === "INVALID_EMAIL") {
          setMessage("Please enter a valid email address");
        } else if (data.code === "API_ERROR") {
          setMessage("Service temporarily unavailable. Please try again later.");
        } else {
          setMessage(data.error || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col gap-10 h-[450px]">
      <div className="flex flex-col bg-bg-black px-5 py-4 gap-4 rounded-[4px]">
        <div className="flex flex-row justify-between">
          <p className="hoves-p1-reg text-white text-wrap max-w-[70%]">
            Subscribe to stay informed about our latest work, projects and
            studio news.
          </p>
          <ClickHandIcon className="min-w-[48px] min-h-[48px]" />
        </div>
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`hoves-p3-reg pb-3 border-b w-full bg-transparent outline-none appearance-none text-white placeholder-white/70 ${
              message && !message.includes("Success") ? "border-red-400" : "border-border-50"
            }`}
            placeholder="Email Address"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute right-0 top-0 cursor-pointer disabled:opacity-50"
          >
            <ArrowRightSVG className="min-w-[20px] min-h-[20px] text-white!" />
          </button>
          {message && (
          <p className={`hoves-p3-reg text-sm mt-2 ${message.includes("Success") ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
        </form>
      </div>
      <div className="flex flex-col">
        <p className="hoves-p3-reg text-[#5C5C5C] border-b border-b-[#E5E5E5] py-2">
          Article
        </p>
        <a href="#" className="flex justify-between items-center py-4 border-b border-b-[#E5E5E5] group cursor-pointer">
          <p className="t-p1 text-[#5C5C5C] relative">
            Copy Link
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#5C5C5C] underline-animation"></span>
          </p>
          <LinkIcon />
        </a>
        <a href="#" className="flex justify-between items-center py-4 border-b border-b-[#E5E5E5] group cursor-pointer">
          <p className="t-p1 text-[#5C5C5C] relative">
            Post on LinkedIn
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#5C5C5C] underline-animation"></span>
          </p>
          <ArrowRightUpIcon />
        </a>
        <a href="#" className="flex justify-between items-center py-4 border-b border-b-[#E5E5E5] group cursor-pointer">
          <p className="t-p1 text-[#5C5C5C] relative">
            Post on X
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#5C5C5C] underline-animation"></span>
          </p>
          <ArrowRightUpIcon />
        </a>
      </div>
    </div>
  );
};

export default ArticleSubscribeBlock;
