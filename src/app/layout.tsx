import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "portugaltopjogossites | Melhores Sites de Jogos em Portugal 2026",
  description:
    "Classificacao independente dos melhores sites de jogos online licenciados em Portugal. Analise especializada, bonus exclusivos e comparativos atualizados em portugaltopjogossites.com",
  metadataBase: new URL("https://portugaltopjogossites.com"),
  openGraph: {
    title: "portugaltopjogossites | Melhores Sites de Jogos em Portugal 2026",
    description:
      "Os melhores sites de jogos online licenciados pelo SRIJ. Bonus exclusivos, analises detalhadas e classificacoes sempre atualizadas.",
    url: "https://portugaltopjogossites.com",
    siteName: "portugaltopjogossites",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans min-h-screen w-full">
        {children}
      </body>
    </html>
  )
}
