import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import type React from "react";
import ClientLayout from "./client-layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DannyOS v1.1.2",
  description: "A minimal, elegant operating system for my work",
  generator: "DannyOS",
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
              (function() {
                try {
                  const stored = localStorage.getItem('dannyos.ui');
                  let shouldBeDark = true;
                  
                  if (stored) {
                    try {
                      const parsed = JSON.parse(stored);
                      const theme = parsed.state?.theme;
                      if (theme === 'light') {
                        shouldBeDark = false;
                      } else {
                        shouldBeDark = true;
                      }
                    } catch (e) {
                      shouldBeDark = true;
                    }
                  }
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
