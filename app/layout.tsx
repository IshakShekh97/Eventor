import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Eventor",
  description: "A Independent Platform for managing events",
  icons: {
    icon: "assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <body className={poppins.variable + " dark:bg-black bg-primary-50"}>
            {children}

            <div className="fixed bottom-10 right-10 z-[99]">
              <ThemeSwitcher />
            </div>
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
