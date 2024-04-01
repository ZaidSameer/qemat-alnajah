import type { Metadata } from "next";
import { Inter, Readex_Pro, Tajawal } from "next/font/google";
import "./styles/globals.css";
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import { Toaster } from "sonner";
import { config } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });
const tajawal = Readex_Pro({ weight: "700", subsets: ["arabic"], variable: "--font-tajawal" });

export const metadata: Metadata = {
  title: config.seoTitle,
  description: config.seoDescription,
  keywords: config.specialties,
  openGraph: {
    title: config.seoTitle,
    description: config.seoDescription,
    url: config.url,
    siteName: config.seoTitle,
    images: [
      {
        url: config.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body className={`${inter.className} ${tajawal.variable}`}>
        <MainNav />
        <div className="min-h-screen">{children}</div>
        <Toaster />
        <MainFooter />
      </body>
    </html>
  );
}
