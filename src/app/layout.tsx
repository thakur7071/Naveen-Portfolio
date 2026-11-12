import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naveen Singh | Full Stack Developer",
  description:
    "Personal developer portfolio of Naveen Singh. Explore my skills, projects, and interactive terminal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}