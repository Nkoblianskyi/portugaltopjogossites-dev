import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Cookies | portugaltopjogossites",
  description: "Informacao detalhada sobre o uso de cookies em portugaltopjogossites.com, em conformidade com o RGPD e a legislacao portuguesa.",
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <span
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          color: "#D4AF37",
          fontWeight: 700,
          fontSize: "1.2rem",
          lineHeight: 1,
          flexShrink: 0,
          paddingTop: "2px",
        }}
      >
        {number}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          color: "#F2F2F2",
          fontWeight: 700,
          fontSize: "1.1rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  )
}

function InfoBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        border: "1px solid #282828",
        borderLeft: "4px solid #D4AF37",
        padding: "16px 20px",
        marginBottom: "16px",
        borderRadius: "0 0.75rem 0.75rem 0",
      }}
    >
      {children}
    </div>
  )
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />

      <main style={{ backgroundColor: "#0D0D0D", minHeight: "80vh" }}>
        <div className="container mx-auto max-w-[860px] px-4 py-14">

          {/* Page header */}
          <div style={{ marginBottom: "48px", borderBottom: "1px solid #282828", paddingBottom: "32px" }}>
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
              portugaltopjogossites.com
            </p>
            <h1
              className="text-balance"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#F2F2F2",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Politica de <span style={{ color: "#D4AF37" }}>Cookies</span>
            </h1>
            <p style={{ color: "#666666", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
              Ultima atualizacao: 1 de maio de 2026 -- Em conformidade com o RGPD e a Lei n.o 41/2004
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            {/* 1 */}
            <section>
              <SectionHeading number="01" title="O que sao Cookies?" />
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "14px" }}>
                Os cookies sao pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website.
                Permitem que o site reconheca o seu dispositivo em visitas subsequentes e conserve determinadas preferencias de navegacao.
              </p>
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8 }}>
                Em portugaltopjogossites.com utilizamos cookies para garantir o funcionamento correto do site,
                analisar o comportamento de navegacao de forma anonimizada e melhorar continuamente a experiencia
                dos nossos visitantes.
              </p>
            </section>

            {/* 2 */}
            <section>
              <SectionHeading number="02" title="Tipos de Cookies que Utilizamos" />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  {
                    title: "Cookies Essenciais",
                    color: "#D4AF37",
                    legal: "Interesse legitimo",
                    items: [
                      "Guardar as preferencias de consentimento de cookies do utilizador",
                      "Garantir a seguranca e estabilidade da sessao de navegacao",
                      "Permitir funcionalidades tecnicas indispensaveis ao funcionamento do site",
                      "Proteger contra ataques de seguranca comuns (CSRF, etc.)",
                    ],
                  },
                  {
                    title: "Cookies de Analytics",
                    color: "#8888CC",
                    legal: "Consentimento do utilizador",
                    items: [
                      "Contagem de visitantes unicos e paginas mais acedidas",
                      "Duracao media das sessoes e taxa de rejeicao anonimizada",
                      "Origem do trafego e percursos de navegacao agregados",
                      "Tipo de dispositivo, sistema operativo e navegador utilizado",
                    ],
                  },
                  {
                    title: "Cookies de Personalizacao",
                    color: "#66AA88",
                    legal: "Consentimento do utilizador",
                    items: [
                      "Recordar filtros e preferencias de pesquisa do utilizador",
                      "Adaptar o conteudo exibido com base em interesses demonstrados",
                      "Guardar configuracoes de visualizacao selecionadas",
                    ],
                  },
                  {
                    title: "Cookies de Performance",
                    color: "#AA8866",
                    legal: "Interesse legitimo",
                    items: [
                      "Monitorizar a velocidade de carregamento de cada pagina",
                      "Identificar erros tecnicos e problemas de estabilidade",
                      "Otimizar a entrega de conteudo estatico e multimédia",
                    ],
                  },
                ].map((cat) => (
                  <div
                    key={cat.title}
                    style={{
                      border: "1px solid #282828",
                      backgroundColor: "#161616",
                      borderRadius: "1rem",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid #282828",
                        padding: "10px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        backgroundColor: "#1A1A1A",
                      }}
                    >
                      <span style={{ color: cat.color, fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.05em" }}>
                        {cat.title}
                      </span>
                      <span style={{ color: "#555555", fontSize: "0.7rem", letterSpacing: "0.05em", textAlign: "right" }}>
                        {cat.legal}
                      </span>
                    </div>
                    <ul style={{ padding: "14px 16px", margin: 0, listStyle: "none" }}>
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          style={{
                            color: "#888888",
                            fontSize: "0.82rem",
                            lineHeight: 1.6,
                            paddingLeft: "14px",
                            position: "relative",
                            marginBottom: "6px",
                          }}
                        >
                          <span style={{ position: "absolute", left: 0, color: cat.color, fontWeight: 700 }}>
                            +
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 3 */}
            <section>
              <SectionHeading number="03" title="Cookies de Terceiros" />
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "16px" }}>
                Alguns cookies sao colocados por servicos de terceiros integrados no nosso site para garantir desempenho e seguranca:
              </p>
              <div style={{ overflowX: "auto", borderRadius: "1rem", overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#202020" }}>
                      {["Servico", "Finalidade", "Duracao", "Base Legal"].map((h) => (
                        <th
                          key={h}
                          style={{
                            border: "1px solid #282828",
                            padding: "10px 14px",
                            textAlign: "left",
                            color: "#D4AF37",
                            fontWeight: 600,
                            fontSize: "0.72rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Google Analytics 4", "Analise de trafego e comportamento anonimizado", "26 meses", "Consentimento"],
                      ["CDN (Cloudflare)", "Otimizacao de desempenho e seguranca da rede", "Sessao", "Interesse legitimo"],
                      ["Security Services", "Protecao contra bots, spam e ataques externos", "24 horas", "Interesse legitimo"],
                    ].map((row, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#161616" : "#141414" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ border: "1px solid #282828", padding: "10px 14px", color: "#AAAAAA" }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4 */}
            <section>
              <SectionHeading number="04" title="Como Gerir os Seus Cookies" />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <InfoBlock>
                  <p style={{ color: "#D4AF37", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Atraves do Nosso Site
                  </p>
                  <p style={{ color: "#AAAAAA", fontSize: "0.85rem", lineHeight: 1.7 }}>
                    Pode alterar as suas preferencias a qualquer momento atraves do painel de cookies disponivel
                    na sua primeira visita ao site. As suas escolhas sao conservadas durante 12 meses.
                  </p>
                </InfoBlock>
                <InfoBlock>
                  <p style={{ color: "#D4AF37", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Atraves do Seu Navegador
                  </p>
                  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                    {[
                      ["Chrome", "Definicoes, Privacidade e seguranca, Cookies e outros dados do site"],
                      ["Firefox", "Opcoes, Privacidade e Seguranca, Cookies e dados do site"],
                      ["Safari", "Preferencias, Privacidade, Cookies e dados de websites"],
                      ["Edge", "Definicoes, Cookies e permissoes do site"],
                    ].map(([browser, path]) => (
                      <li key={browser} style={{ color: "#888888", fontSize: "0.82rem", marginBottom: "8px", lineHeight: 1.5 }}>
                        <strong style={{ color: "#D4AF37" }}>{browser}:</strong> {path}
                      </li>
                    ))}
                  </ul>
                </InfoBlock>
              </div>
              <p style={{ color: "#666666", fontSize: "0.8rem", lineHeight: 1.6, marginTop: "8px" }}>
                Nota: desativar todos os cookies pode prejudicar o funcionamento correto do site.
                Os cookies essenciais nao podem ser desativados pois sao necessarios para a operacao basica da plataforma.
              </p>
            </section>

            {/* 5 */}
            <section>
              <SectionHeading number="05" title="Atualizacoes desta Politica" />
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8 }}>
                Esta politica pode ser revista periodicamente para refletir alteracoes nos servicos, tecnologias ou
                requisitos legais em vigor. A data de ultima atualizacao e sempre indicada no topo desta pagina.
                Alteracoes relevantes serao comunicadas atraves de aviso destacado no site.
              </p>
            </section>

            {/* Compliance note */}
            <div
              style={{
                border: "1px solid #282828",
                backgroundColor: "#141414",
                padding: "20px 24px",
                borderRadius: "1rem",
              }}
            >
              <p style={{ color: "#555555", fontSize: "0.78rem", lineHeight: 1.7, textAlign: "center" }}>
                Esta politica esta em conformidade com o Regulamento Geral sobre a Protecao de Dados (RGPD,
                Regulamento UE 2016/679) e a Lei n.o 41/2004, de 18 de agosto, relativa ao tratamento de dados
                pessoais e a protecao da privacidade no setor das comunicacoes eletronicas.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
