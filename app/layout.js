import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

// Load font with subsets and display strategy
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Derick Dalmolin | Software Engineer & Web Developer",
  description:
    "Apresento aqui minhas habilidades e minha experiência como Engenheiro de Software.",
  keywords:
    "Derick Dalmolin, Software Engineer, Backend Developer, Web Developer, NextJS, React, JavaScript, TypeScript, Portfolio",
  creator: "Derick Dalmolin",
  publisher: "Derick Dalmolin",
  openGraph: {
    title: "Derick Dalmolin | Software Engineer & Web Developer",
    description:
      "Apresento aqui minhas habilidades e minha experiência como Engenheiro de Software.",
    url: "https://praisestula.com",
    siteName: "Derick Dalmolin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derick Dalmolin | Software Engineer & Web Developer",
    description:
      "Apresento aqui minhas habilidades e minha experiência como Engenheiro de Software.",
    creator: "@",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2d2d2d",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body
        suppressHydrationWarning
        className="w-full min-h-screen bg-secondary flex flex-col antialiased"
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
