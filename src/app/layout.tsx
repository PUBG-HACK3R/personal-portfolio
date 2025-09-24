import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeApplier from "@/components/ThemeApplier";
import StructuredData from "@/components/StructuredData";
import ErrorBoundary from "@/components/ErrorBoundary";
import SkipToContent from "@/components/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adnan Khan - Full Stack Developer & UI/UX Enthusiast",
    template: "%s | Adnan Khan"
  },
  description: "Passionate Full Stack Developer with 1+ years of experience building modern web applications. Specializing in React, Next.js, Node.js, and creating exceptional digital experiences.",
  keywords: [
    "Adnan Khan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Developer",
    "Portfolio",
    "Web Applications",
    "Modern Web Development"
  ],
  authors: [{ name: "Adnan Khan", url: "https://adnankhan.dev" }],
  creator: "Adnan Khan",
  publisher: "Adnan Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adnankhan.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adnankhan.dev",
    title: "Adnan Khan - Full Stack Developer & UI/UX Enthusiast",
    description: "Passionate Full Stack Developer with 1+ years of experience building modern web applications. Specializing in React, Next.js, Node.js, and creating exceptional digital experiences.",
    siteName: "Adnan Khan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adnan Khan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Khan - Full Stack Developer & UI/UX Enthusiast",
    description: "Passionate Full Stack Developer with 1+ years of experience building modern web applications.",
    creator: "@yourtwitterhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme ? theme === 'dark' : prefersDark;
                document.documentElement.classList.toggle('dark', isDark);
                document.body && document.body.classList.toggle('dark', isDark);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <StructuredData />
        <ThemeApplier />
        <SkipToContent />
        <ErrorBoundary>
          <Navigation />
          <main id="main-content" className="pt-16">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
