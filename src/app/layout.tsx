import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VideoModalProvider } from "@/context/VideoModalContext";
import VideoModal from "@/components/VideoModal";
import { CalModalProvider } from "@/context/CalModalContext";
import CalModal from "@/components/CalModal";
import AppWrapper from "@/components/AppWrapper";
import { Metadata } from "next";
import LenisProvider from "@/context/LenisProvider";
const ttHoves = localFont({
  src: [
    {
      path: "../../public/fonts/TTHoves-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHoves-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHoves-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHoves-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-hoves",
  display: "swap",
});

const systemMono = {
  variable: "--font-system-mono",
};

export const metadata: Metadata = {
  title: "UXLAB | We Make Interfaces",
  description: "UXLAB is a UX & UI design studio for apps, websites, and brands. We craft digital products and strategies for startups, scale-ups, and corporates.",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "UXLAB is a UX & UI design studio for apps, websites, and brands. We craft digital products and strategies for startups, scale-ups, and corporates.",
    description: "UXLAB is a UX & UI design studio for apps, websites, and brands. We craft digital products and strategies for startups, scale-ups, and corporates.",
    url: "https://uxlab.digital/",
    siteName: "UXLAB",
    images: [
      {
        url: "https://uxlab.digital/meta/thumbnail.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "UXLAB - We Make Interfaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UXLAB | We Make Interfaces",
    description: "UXLAB is a UX & UI design studio for apps, websites, and brands. We craft digital products and strategies for startups, scale-ups, and corporates.",
    images: ["https://uxlab.digital/meta/thumbnail.jpg?v=2"],
  },
  icons: {
    icon: "/meta/64 x 66.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${ttHoves.variable} ${systemMono.variable} antialiased`}
      >
        <LenisProvider>
          <VideoModalProvider>
            <CalModalProvider>
              <AppWrapper>
                <div
                  className="min-h-screen flex flex-col"
                  style={{ scrollBehavior: "smooth" }}
                >
                  <Header />
                  <main className="flex-1 overflow-x-hidden ">{children}</main>
                  <Footer />
                </div>
              </AppWrapper>
              <VideoModal />
              <CalModal />
            </CalModalProvider>
          </VideoModalProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
