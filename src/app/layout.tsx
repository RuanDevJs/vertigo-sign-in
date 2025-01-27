import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

import "./globals.css";

const fontTitilliumWeb = Titillium_Web({
  variable: "--font-",
  subsets: ["latin"],
  weight: ['200', '300', '400', '600', '700', '900']
});


export const metadata: Metadata = {
  title: "Vertigo - Acesse a plataforma",
  description: "Faça login ou registre-se para começar a construir seus projetos ainda hoje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontTitilliumWeb.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
