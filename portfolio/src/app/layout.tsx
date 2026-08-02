import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { BackToTop } from "@/components/shared/BackToTop";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pholosho-mashabela.vercel.app"),
  title: {
    default: "Pholosho Mashabela | Computer Science Graduate & Full-Stack Developer",
    template: "%s | Pholosho Mashabela",
  },
  description:
    "Portfolio of Pholosho Bethuel Mashabela — Computer Science diploma graduate from Tshwane University of Technology. Full-stack developer skilled in Java, PHP, Python, React Native, and AWS. Seeking graduate software development roles.",
  keywords: [
    "Pholosho Mashabela",
    "Computer Science Graduate",
    "Full-Stack Developer",
    "Software Engineer",
    "React Native",
    "Java",
    "PHP",
    "Python",
    "AWS",
    "South Africa",
    "Junior Developer",
    "Graduate Software Developer",
  ],
  authors: [{ name: "Pholosho Bethuel Mashabela" }],
  creator: "Pholosho Bethuel Mashabela",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://pholosho-mashabela.vercel.app",
    siteName: "Pholosho Mashabela Portfolio",
    title: "Pholosho Mashabela | Computer Science Graduate & Full-Stack Developer",
    description:
      "Computer Science graduate building thoughtful software. Full-stack experience with Java, PHP, Python, React Native, and AWS. Open to graduate and junior developer roles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pholosho Mashabela — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pholosho Mashabela | Full-Stack Developer",
    description:
      "Computer Science graduate with practical experience in full-stack and mobile development. Seeking junior and graduate roles.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pholosho-mashabela.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pholosho Bethuel Mashabela",
              url: "https://pholosho-mashabela.vercel.app",
              email: "Pholosho204@gmail.com",
              telephone: "+27609116216",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressCountry: "ZA",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Tshwane University of Technology",
              },
              jobTitle: "Computer Science Graduate / Full-Stack Developer",
              sameAs: [
                "https://github.com/Pholosho204",
                "https://linkedin.com/in/pb-mashabela",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
