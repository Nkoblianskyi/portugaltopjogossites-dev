const CRITERIA = [
  {
    pct: "35%",
    title: "Seguranca e Licenca",
    desc: "Verificamos a licenca SRIJ, os protocolos de encriptacao SSL, as politicas de protecao de dados e o historico de conformidade regulatoria de cada plataforma.",
  },
  {
    pct: "25%",
    title: "Catalogo de Jogos",
    desc: "Avaliamos a diversidade do catalogo, a qualidade dos fornecedores de software, os jogos em direto disponiveis e os RTP publicados de forma transparente.",
  },
  {
    pct: "25%",
    title: "Ofertas e Promocoes",
    desc: "Analisamos o valor real das ofertas de boas-vindas, os requisitos de apostas, os limites de levantamento e a clareza dos termos e condicoes aplicaveis.",
  },
  {
    pct: "15%",
    title: "Apoio e Pagamentos",
    desc: "Testamos os canais de assistencia ao cliente, os metodos de deposito e levantamento disponiveis, os prazos de processamento e os limites de transacao.",
  },
]

const RESPONSIBLE = [
  {
    label: "Habitos Saudaveis",
    items: [
      "Define limites de deposito e duracao de sessao",
      "Joga apenas com dinheiro que pode perder",
      "Faz pausas regulares durante as sessoes",
      "Nao persegue perdas de sessoes anteriores",
    ],
  },
  {
    label: "Sinais de Risco",
    items: [
      "Gastar sistematicamente mais do que planeado",
      "Esconder ao entorno os montantes gastos",
      "Neglicenciar responsabilidades por causa do jogo",
      "Sentir ansiedade quando sem acesso ao jogo",
    ],
  },
]

export function InfoSections() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">

        {/* ---- Metodologia de Avaliacao ---- */}
        <div
          style={{
            backgroundColor: "#161616",
            border: "1px solid #282828",
            borderRadius: "1.25rem",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          <div style={{ height: "3px", backgroundColor: "#D4AF37" }} />

          <div className="p-8 md:p-12">
            <p
              style={{
                color: "#D4AF37",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Metodologia de Analise
            </p>

            <h2
              className="text-balance"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#F2F2F2",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Como Avaliamos{" "}
              <span style={{ color: "#D4AF37" }}>Cada Plataforma</span>
            </h2>

            <p style={{ color: "#888888", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "640px", marginBottom: "40px" }}>
              A nossa equipa testa cada site com depositos reais e sessoes de jogo autenticas.
              Utilizamos uma metodologia estruturada com ponderacoes definidas para garantir classificacoes
              imparciais, revistas e atualizadas mensalmente.
            </p>

            {/* Criteria grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CRITERIA.map((c, i) => (
                <div
                  key={c.title}
                  style={{
                    padding: "24px",
                    backgroundColor: i === 0 ? "#202020" : "#1A1A1A",
                    borderRadius: "1rem",
                    border: i === 0 ? "1px solid rgba(212,175,55,0.3)" : "1px solid #282828",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#D4AF37",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    {c.pct}
                  </div>
                  <p style={{ color: "#F2F2F2", fontWeight: 600, fontSize: "0.85rem", marginBottom: "8px", letterSpacing: "0.03em" }}>
                    {c.title}
                  </p>
                  <p style={{ color: "#666666", fontSize: "0.78rem", lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Independence note */}
            <div
              style={{
                marginTop: "32px",
                border: "1px solid #282828",
                borderLeft: "4px solid #D4AF37",
                padding: "20px 24px",
                backgroundColor: "#141414",
                borderRadius: "0 0.75rem 0.75rem 0",
              }}
            >
              <p style={{ color: "#D4AF37", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
                Compromisso de Independencia
              </p>
              <p style={{ color: "#AAAAAA", fontSize: "0.85rem", lineHeight: 1.7 }}>
                As nossas analises sao completamente independentes e nao sao influenciadas por relacoes comerciais.
                Testamos cada plataforma com fundos proprios e atualizamos as classificacoes todos os meses.
                A nossa recomendacao baseia-se exclusivamente em criterios objetivos e verificaveis pelos utilizadores.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Jogo Responsavel ---- */}
        <div
          style={{
            backgroundColor: "#161616",
            border: "1px solid #282828",
            borderRadius: "1.25rem",
            overflow: "hidden",
          }}
        >
          <div className="p-8 md:p-12">
            <p
              style={{
                color: "#D4AF37",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Responsabilidade
            </p>

            <h2
              className="text-balance"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#F2F2F2",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Jogar com{" "}
              <span style={{ color: "#D4AF37" }}>Responsabilidade</span>
            </h2>

            <p style={{ color: "#888888", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "640px", marginBottom: "40px" }}>
              O jogo online deve ser encarado unicamente como uma forma de entretenimento.
              Nunca jogue montantes que nao pode permitir-se perder, e procure ajuda especializada
              caso sinta que os habitos de jogo estao a afectar a sua vida quotidiana ou a das pessoas proximas.
            </p>

            {/* Two columns */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {RESPONSIBLE.map((col, i) => (
                <div
                  key={col.label}
                  style={{
                    border: i === 0 ? "1px solid rgba(212,175,55,0.25)" : "1px solid rgba(192,39,45,0.25)",
                    padding: "24px",
                    borderRadius: "1rem",
                    backgroundColor: "#1A1A1A",
                  }}
                >
                  <p
                    style={{
                      color: i === 0 ? "#D4AF37" : "#C0272D",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginBottom: "16px",
                    }}
                  >
                    {col.label}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {col.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          color: "#AAAAAA",
                          fontSize: "0.83rem",
                          lineHeight: 1.5,
                          paddingBottom: "10px",
                          borderBottom: "1px solid #222222",
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            color: i === 0 ? "#D4AF37" : "#C0272D",
                            flexShrink: 0,
                            marginTop: "1px",
                            fontWeight: 700,
                          }}
                        >
                          {i === 0 ? "+" : "x"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Help contacts */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <div
                style={{
                  padding: "24px",
                  border: "1px solid #282828",
                  borderRadius: "1rem",
                  textAlign: "center",
                  backgroundColor: "#1A1A1A",
                }}
              >
                <p style={{ color: "#888888", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Linha SOS Jogador
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "#D4AF37",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    marginBottom: "6px",
                    letterSpacing: "0.05em",
                  }}
                >
                  213 950 840
                </p>
                <p style={{ color: "#555555", fontSize: "0.75rem" }}>Segunda a Sexta, das 10h00 as 20h00</p>
              </div>

              <div
                style={{
                  padding: "24px",
                  border: "1px solid #282828",
                  borderRadius: "1rem",
                  textAlign: "center",
                  backgroundColor: "#1A1A1A",
                }}
              >
                <p style={{ color: "#888888", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                  SICAD
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "#D4AF37",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    marginBottom: "6px",
                  }}
                >
                  www.sicad.pt
                </p>
                <p style={{ color: "#555555", fontSize: "0.75rem" }}>Recursos e apoio especializado gratuito</p>
              </div>
            </div>

            {/* 18+ bar */}
            <div
              style={{
                backgroundColor: "rgba(192,39,45,0.08)",
                border: "1px solid rgba(192,39,45,0.35)",
                borderRadius: "1rem",
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  border: "2px solid #C0272D",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "#C0272D", fontWeight: 700, fontSize: "0.8rem" }}>18+</span>
              </div>
              <div>
                <p style={{ color: "#C0272D", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Proibido a Menores de 18 Anos
                </p>
                <p style={{ color: "#666666", fontSize: "0.75rem", marginTop: "2px" }}>
                  O acesso a plataformas de jogos online e a realizacao de apostas sao exclusivamente permitidos a maiores de 18 anos.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
