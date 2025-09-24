import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VideoModalProvider } from "@/context/VideoModalContext";
import VideoModal from "@/components/VideoModal";
import AppWrapper from "@/components/AppWrapper";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <title>UXLAB | We Make Interfaces</title>
      <meta
        name="description"
        content="UXLAB is a UX &amp; UI design studio for apps, websites, and brands. We craft digital products and strategies for startups, scale-ups, and corporates."
      />
      <link rel="icon" href="/meta/64 x 66.jpg" />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="UXLAB is a UX &amp; UI design studio for apps, websites, and brands. We craft digital products and strategies for startups, scale-ups, and corporates."
      />
      <meta
        property="og:description"
        content="UXLAB is a UX &amp; UI design studio for apps, websites, and brands. We craft digital products and strategies for startups, scale-ups, and corporates."
      />
      <meta property="og:url" content="https://uxlab.digital/" />
      <meta property="og:site_name" content="UXLAB" />
      <meta
        property="og:image"
        content="https://uxlab.digital/meta/thumbnail.jpg?v=2"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://uxlab.digital/meta/thumbnail.jpg?v=2"
      />
      <body
        className={`${ttHoves.variable} ${systemMono.variable} antialiased`}
      >
        <VideoModalProvider>
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
        </VideoModalProvider>
      </body>
    </html>
  );
}
