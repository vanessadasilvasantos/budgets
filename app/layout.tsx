import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Budgets",
  description: "Calcule com facilidade o custo da sua bancada de granito. Informe as dimensões, escolha os materiais e receba estimativas instantâneas para o seu projeto.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
