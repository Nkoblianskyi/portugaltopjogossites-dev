"use client"

import { bettingSites } from "@/lib/mock-data"
import { StarRating } from "@/components/star-rating"

export function OurChoiceSection() {
  const ourChoice = bettingSites[0]

  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">

        {/* Section header */}
        <div className="text-center mb-10">
          <div
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: "#D4AF37",
              margin: "0 auto 20px",
              borderRadius: "9999px",
            }}
          />
          <h2
            className="text-2xl sm:text-3xl text-balance"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, letterSpacing: "0.04em" }}
          >
            <span style={{ color: "#D4AF37" }}>Selecao </span>
            <span style={{ color: "#F2F2F2" }}>dos Especialistas</span>
          </h2>
          <p style={{ color: "#999999", fontSize: "0.85rem", marginTop: "10px", lineHeight: 1.6 }}>
            Depois de testar mais de 50 plataformas, esta foi a que reuniu as melhores condicoes para jogadores portugueses
          </p>
        </div>

        {/* Main card */}
        <div
          style={{
            border: "1px solid #D4AF37",
            backgroundColor: "#161616",
            borderRadius: "1.25rem",
            overflow: "hidden",
          }}
        >
          <div style={{ height: "3px", backgroundColor: "#D4AF37" }} />

          {/* Label */}
          <div
            style={{
              backgroundColor: "#C0272D",
              padding: "8px 16px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#F2F2F2",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Recomendacao dos Especialistas
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid md:grid-cols-3 gap-8 items-center">

              {/* Logo */}
              <div className="text-center">
                <div
                  style={{
                    backgroundColor: "#000000",
                    border: "1px solid #282828",
                    borderRadius: "0.75rem",
                    padding: "20px",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={ourChoice.logo || "/placeholder.svg"}
                    alt={ourChoice.name}
                    style={{ width: "180px", height: "100px", objectFit: "contain" }}
                  />
                </div>
                <p
                  style={{
                    color: "#888888",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "10px",
                  }}
                >
                  {ourChoice.name}
                </p>
              </div>

              {/* Bonus + Rating */}
              <div className="text-center">
                <div style={{ borderBottom: "1px solid #282828", paddingBottom: "20px", marginBottom: "20px" }}>
                  <p
                    style={{
                      color: "#D4AF37",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Oferta de Boas-Vindas
                  </p>
                  <p style={{ color: "#F2F2F2", fontWeight: 600, fontSize: "1.05rem" }}>{ourChoice.bonus}</p>
                </div>
                <div>
                  <div style={{ color: "#D4AF37", fontWeight: 700, fontSize: "2rem", lineHeight: 1 }}>
                    {ourChoice.rating.toFixed(1)}
                    <span style={{ color: "#555555", fontSize: "0.8rem" }}>/10</span>
                  </div>
                  <div className="flex justify-center mt-2">
                    <StarRating rating={ourChoice.rating / 2} size="md" showHover />
                  </div>
                  <p style={{ color: "#555555", fontSize: "0.7rem", marginTop: "4px" }}>({ourChoice.reviews} avaliacoes)</p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center flex flex-col items-center gap-4">
                <button
                  onClick={() => window.open(ourChoice.url, "_blank")}
                  style={{
                    backgroundColor: "#C0272D",
                    color: "#F2F2F2",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "14px 32px",
                    border: "none",
                    borderRadius: "0.75rem",
                    cursor: "pointer",
                    width: "100%",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#E03540")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C0272D")}
                >
                  Obter Bonus Agora
                </button>
                <p style={{ color: "#555555", fontSize: "0.7rem" }}>Registo rapido em 2 minutos</p>
                <p style={{ color: "#D4AF37", fontSize: "0.7rem", fontWeight: 600 }}>Licenciado pelo SRIJ</p>
              </div>
            </div>

            {/* Why our choice */}
            <div style={{ borderTop: "1px solid #282828", marginTop: "32px", paddingTop: "32px" }}>
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Razoes para Esta Escolha
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Seguranca Comprovada",
                    desc: "Licenca SRIJ activa, protecao SSL de 256 bits e separacao total dos fundos dos jogadores.",
                  },
                  {
                    title: "Levantamentos em Horas",
                    desc: "MB WAY, Multibanco e cartoes de credito. Pedidos de levantamento processados em menos de 2 horas.",
                  },
                  {
                    title: "Apoio em Portugues",
                    desc: "Equipa de suporte disponivel 24 horas por dia, em portugues, por chat, email e telefone.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      borderLeft: "3px solid #D4AF37",
                      paddingLeft: "16px",
                      borderRadius: "0 0.5rem 0.5rem 0",
                    }}
                  >
                    <p style={{ color: "#F2F2F2", fontWeight: 600, fontSize: "0.85rem", marginBottom: "6px" }}>
                      {item.title}
                    </p>
                    <p style={{ color: "#666666", fontSize: "0.78rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
