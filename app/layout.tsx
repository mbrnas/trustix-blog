import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustixo – Smart Finance Blog",
  description:
    "Trustixo helps you make smarter financial decisions. Learn how to save, invest, and grow your money with fast, AI-powered finance guides.",
  keywords: [
    "finance",
    "personal finance",
    "investing",
    "saving money",
    "Trustixo",
    "budgeting",
    "financial tips",
    "crypto",
    "side hustles",
  ],
  authors: [{ name: "Trustixo Team", url: "https://trustixo.com" }],
  creator: "Trustixo",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <span className="font-bold text-lg pl-4">Trustixo</span>

                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <Analytics />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
