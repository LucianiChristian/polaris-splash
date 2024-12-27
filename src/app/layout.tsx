import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polaris North Star",
  description: "A powerful management tool with an integrated planning system to help teams and individuals stay aligned and achieve their goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}