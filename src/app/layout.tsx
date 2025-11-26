import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Plataforma de saúde da Lacrei, focada na comunidade LGBTQIA+.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${NunitoFont.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

