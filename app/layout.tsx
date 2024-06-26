import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple, neobrutalism } from "@clerk/themes";
import "./globals.css";

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
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
        userButton: {
          baseTheme: [dark, shadesOfPurple],
        },
        userProfile: {
          baseTheme: [dark],
        },
      }}
    >
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <body
            className={
              poppins.variable +
              " bg-dotted-pattern bg-cover bg-fixed bg-center"
            }
          >
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
