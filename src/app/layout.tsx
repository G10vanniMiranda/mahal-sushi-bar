import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahal-sushi-bar.vercel.app"),
  title: {
    default: "Mahal Sushi Bar",
    template: "%s | Mahal Sushi Bar",
  },
  description:
    "Experimente o melhor da culinária japonesa com ingredientes frescos e apresentação impecável no conforto da sua casa.",
  keywords: [
    "sushi",
    "japonês",
    "delivery",
    "Porto Velho",
    "Mahal Sushi Bar",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Mahal Sushi Bar",
    description:
      "Culinária japonesa autêntica com ingredientes frescos e excelência no preparo.",
    siteName: "Mahal Sushi Bar",
    images: [
      {
        url: "/combo.jpeg",
        width: 1200,
        height: 630,
        alt: "Peças de sushi selecionadas do Mahal Sushi Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahal Sushi Bar",
    description:
      "Culinária japonesa autêntica com ingredientes frescos e excelência no preparo.",
    images: ["/combo.jpeg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#2A2218",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-yellow-400 focus:text-black focus:px-3 focus:py-2 focus:rounded"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
