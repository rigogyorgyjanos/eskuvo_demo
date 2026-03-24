import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEMO Esküvői Ruhaszalon",
  description: "Prémium menyasszonyi ruhák Budapesten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}