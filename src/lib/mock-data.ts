export interface BettingSite {
  id: number
  rank: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  reviews: number
  features: string[]
  isTopChoice?: boolean
  badge?: string
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    rank: 1,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.8,
    bonus: "5 EUR no Registo e Ate 500 EUR de Bonus",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Movel"],

    badge: "RECOMENDADO",
    url: "https://www.luckia.pt/",
    reviews: 5174,
  },
  {
    id: 2,
    rank: 2,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.7,
    bonus: "25 FreeSpins no Registo",
    features: ["Bonus Generoso", "Variedade de Jogos", "Suporte Portugues"],
    badge: "MAIS POPULAR",
    isTopChoice: true,
    url: "https://www.lebull.pt/",
    reviews: 4049,
  },
  {
    id: 3,
    rank: 3,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.4,
    bonus: "20 Jogadas Gratis",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rapidos"],
    url: "https://www.casinoportugal.pt/",
    badge: "MELHOR ESCOLHA",
    reviews: 5017,
  },

  {
    id: 4,
    rank: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.3,
    bonus: "100% Ate 20 EUR",
    features: ["Licenciado SRIJ", "Casino Portugues", "Suporte 24/7"],
    url: "https://www.solverde.pt/",
    reviews: 4025,
  },
  {
    id: 5,
    rank: 5,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.2,
    bonus: "Deposita 10 EUR e Joga com 50 EUR",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],

    url: "https://www.betclic.pt/",
    reviews: 4618,
  },
]
