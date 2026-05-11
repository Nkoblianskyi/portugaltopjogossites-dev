"use client"

import { Shield, CreditCard, Headphones } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"
import { StarRating } from "@/components/star-rating"

export function BonusSection() {
  const topCasinos = bettingSites.slice(0, 3)

  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">

        {/* Section header */}
        <div className="text-center mb-10">
          <div style={{ width: "48px", height: "2px", backgroundColor: "#C9A84C", margin: "0 auto 20px" }} />
          <h2
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, letterSpacing: "0.04em" }}
            className="text-2xl sm:text-3xl"
          >
            <span style={{ color: "#C9A84C" }}>Melhores </span>
            <span style={{ color: "#F5F5F5" }}>Bonus de Casino</span>
          </h2>
          <p style={{ color: "#666666", fontSize: "0.85rem", marginTop: "10px" }}>
            Os bonus mais generosos dos casinos licenciados em Portugal
          </p>
        </div>

        {/* Top 3 bonus cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {topCasinos.map((casino, index) => (
            <div
              key={casino.id}
              style={{
                backgroundColor: "#1A1A1A",
                border: index === 0 ? "1px solid #C9A84C" : "1px solid #2A2A2A",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {index === 0 && <div style={{ height: "2px", backgroundColor: "#C9A84C" }} />}
              {index === 0 && (
                <div style={{ backgroundColor: "#C9A84C", textAlign: "center", padding: "5px" }}>
                  <span style={{ color: "#0F0F0F", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    Melhor Bonus
                  </span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="text-center mb-5">
                  <div style={{ backgroundColor: "#000000", border: "1px solid #2A2A2A", padding: "12px", display: "inline-block" }}>
                    <img
                      src={casino.logo || "/placeholder.svg"}
                      alt={casino.name}
                      style={{ width: "130px", height: "72px", objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="text-center mb-5 flex-1">
                  <p style={{ color: "#C9A84C", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                    Bonus de Boas-Vindas
                  </p>
                  <p style={{ color: "#F5F5F5", fontWeight: 600, fontSize: "0.9rem", marginBottom: "12px" }}>{casino.bonus}</p>
                  <div className="flex justify-center mb-1">
                    <StarRating rating={casino.rating / 2} size="sm" showHover />
                  </div>
                  <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "0.85rem" }}>{casino.rating.toFixed(1)}/10</p>
                </div>
                <button
                  onClick={() => window.open(casino.url, "_blank")}
                  style={{
                    width: "100%",
                    backgroundColor: index === 0 ? "#C9A84C" : "transparent",
                    color: index === 0 ? "#0F0F0F" : "#C9A84C",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "12px",
                    border: index === 0 ? "none" : "1px solid #C9A84C",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#E2C06B"
                    e.currentTarget.style.color = "#0F0F0F"
                    e.currentTarget.style.borderColor = "#E2C06B"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = index === 0 ? "#C9A84C" : "transparent"
                    e.currentTarget.style.color = index === 0 ? "#0F0F0F" : "#C9A84C"
                    e.currentTarget.style.borderColor = index === 0 ? "none" : "#C9A84C"
                  }}
                >
                  Obter Bonus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Portuguese casinos */}
        <div style={{ border: "1px solid #2A2A2A", backgroundColor: "#1A1A1A", padding: "40px" }} className="mb-8">
          <p
            style={{ color: "#C9A84C", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", marginBottom: "28px" }}
          >
            Porque Escolher Casinos Portugueses
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Shield, title: "Licenciados SRIJ", desc: "Todos os casinos sao licenciados e regulamentados pelo Servico de Regulacao e Inspecao de Jogos." },
              { Icon: CreditCard, title: "Pagamentos Locais", desc: "MB WAY, Multibanco e outros metodos de pagamento portugueses para maxima conveniencia." },
              { Icon: Headphones, title: "Suporte em Portugues", desc: "Atendimento ao cliente 24/7 em portugues por chat, email e telefone." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div
                  style={{ width: "48px", height: "48px", border: "1px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}
                >
                  <Icon style={{ width: "22px", height: "22px", color: "#C9A84C" }} />
                </div>
                <p style={{ color: "#F5F5F5", fontWeight: 600, fontSize: "0.9rem", marginBottom: "8px" }}>{title}</p>
                <p style={{ color: "#666666", fontSize: "0.78rem", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible gambling notice */}
        <div style={{ border: "1px solid #333333", padding: "20px", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.85rem", marginBottom: "6px" }}>
            Jogue com Responsabilidade
          </p>
          <p style={{ color: "#555555", fontSize: "0.78rem" }}>
            Os bonus sao uma forma de entretenimento. Defina sempre limites e jogue apenas o que pode permitir-se perder.
          </p>
        </div>
      </div>
    </section>
  )
}
