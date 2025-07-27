import { Geist, Geist_Mono ,Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ClerkProvider, SignUpButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DAKTARSAAB",
  description: "Connect With Doctors",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
        baseTheme: dark,
      }}>
    <html lang="en" suppressHydrationWarning>
       <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
      <body
        className={`${inter.className} `}
      ><ThemeProvider 
           attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <Header></Header>
        <main className="min-h-screen"> {children}</main>
         <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Team Intellijence</p>
              </div>
            </footer></ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
