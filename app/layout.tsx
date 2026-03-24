import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirandella Esküvői Ruhaszalon",
  description: "Prémium menyasszonyi ruhák Budapesten – időpontfoglalás",
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