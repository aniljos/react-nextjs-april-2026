
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/context/AppThemeContext";
import AppBar from "@/components/AppBar";
import ReduxProvider from "@/redux/ReduxProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Awesome App",
  description: "Created for training",
  
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
    >
      <body className="min-h-full flex flex-col container">
        <ReduxProvider>
          <AppThemeProvider>
            <header>
              <AppBar />
            </header>
            <main>{children}</main>
          </AppThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
