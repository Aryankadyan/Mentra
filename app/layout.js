import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from "@clerk/themes"
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>

      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`} suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
              { /* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster />
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by AryanKadyan</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
            </ClerkProvider>
  )
}
