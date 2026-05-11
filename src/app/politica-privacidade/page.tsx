import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Privacidade | portugaltopjogossites",
  description: "Como portugaltopjogossites.com recolhe, processa e protege os seus dados pessoais, em conformidade com o RGPD.",
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

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #282828",
        backgroundColor: "#161616",
        marginBottom: "12px",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "#1E1E1E",
          borderBottom: "1px solid #282828",
          padding: "9px 16px",
        }}
      >
        <span
          style={{
            color: "#D4AF37",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      </div>
      <div style={{ padding: "14px 16px" }}>{children}</div>
    </div>
  )
}

export default function PoliticaPrivacidadePage() {
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
              Politica de <span style={{ color: "#D4AF37" }}>Privacidade</span>
            </h1>
            <p style={{ color: "#666666", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
              Ultima atualizacao: 2026
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            {/* 1 */}
            <section>
              <SectionHeading number="01" title="Quem Somos" />
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "14px" }}>
                portugaltopjogossites (portugaltopjogossites.com) e um servico de comparacao independente de sites
                de jogos online autorizados em Portugal pela SRIJ -- Servico de Regulacao e Inspecao de Jogos.
              </p>
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8 }}>
                Nao operamos jogos de casino, nao processamos transacoes financeiras relacionadas com jogo e nao
                recolhemos dados sensiveis sobre habitos de jogo individuais. Somos exclusivamente uma plataforma
                editorial de informacao, analise e comparacao de operadores licenciados.
              </p>
            </section>

            {/* 2 */}
            <section>
              <SectionHeading number="02" title="Dados que Recolhemos" />
              <InfoBlock label="Recolhidos Automaticamente">
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {[
                    "Endereco IP e localizacao geografica aproximada (pais e cidade)",
                    "Tipo de navegador, sistema operativo e dispositivo utilizado",
                    "Paginas visitadas, duracao da sessao e percurso de navegacao",
                    "Origem do trafego (motor de busca, referencia direta, redes sociais)",
                    "Dados de cookies conforme descrito na nossa Politica de Cookies",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "#888888",
                        fontSize: "0.83rem",
                        lineHeight: 1.6,
                        marginBottom: "8px",
                        paddingLeft: "14px",
                        position: "relative",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#D4AF37" }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </InfoBlock>
              <InfoBlock label="Fornecidos Voluntariamente">
                <p style={{ color: "#888888", fontSize: "0.83rem", lineHeight: 1.6 }}>
                  Atualmente nao dispomos de formularios de contacto, registo de conta ou subscricao de newsletter.
                  Caso estes servicos sejam implementados no futuro, esta politica sera atualizada em conformidade
                  e com aviso previo aos utilizadores.
                </p>
              </InfoBlock>
            </section>

            {/* 3 */}
            <section>
              <SectionHeading number="03" title="Como Utilizamos os Seus Dados" />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  ["Melhoria do servico", "Analise de dados agregados para melhorar o conteudo editorial e a experiencia de utilizacao."],
                  ["Seguranca e integridade", "Detecao de atividade maliciosa, tentativas de fraude e protecao da plataforma."],
                  ["Analytics", "Geracao de estatisticas de trafego completamente anonimizadas e sem identificacao individual."],
                  ["Desempenho tecnico", "Monitorizacao de erros, tempos de resposta e disponibilidade do site."],
                  ["Cumprimento legal", "Resposta a obrigacoes previstas na legislacao portuguesa e europeia aplicavel."],
                ].map(([title, desc]) => (
                  <div
                    key={title as string}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      borderBottom: "1px solid #1E1E1E",
                      paddingBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "#D4AF37",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        flexShrink: 0,
                        minWidth: "160px",
                        paddingTop: "2px",
                      }}
                    >
                      {title}
                    </span>
                    <span style={{ color: "#888888", fontSize: "0.83rem", lineHeight: 1.6 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 */}
            <section>
              <SectionHeading number="04" title="Base Legal para o Tratamento" />
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { basis: "Interesse Legitimo", desc: "Analise do site, melhorias de servico, seguranca e detecao de fraude." },
                  { basis: "Consentimento", desc: "Cookies nao essenciais, personalizacao e analytics de comportamento." },
                  { basis: "Execucao de Servico", desc: "Fornecimento das funcionalidades de comparacao solicitadas pelo utilizador." },
                  { basis: "Obrigacao Legal", desc: "Cumprimento de requisitos regulatorios em vigor em Portugal e na UE." },
                ].map((item) => (
                  <div
                    key={item.basis}
                    style={{
                      border: "1px solid #282828",
                      backgroundColor: "#161616",
                      padding: "16px",
                      borderRadius: "0.75rem",
                    }}
                  >
                    <p style={{ color: "#D4AF37", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", marginBottom: "8px" }}>
                      {item.basis}
                    </p>
                    <p style={{ color: "#777777", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 */}
            <section>
              <SectionHeading number="05" title="Partilha de Informacoes" />
              <div
                style={{
                  border: "1px solid #282828",
                  borderLeft: "4px solid #C0272D",
                  backgroundColor: "#141414",
                  padding: "16px 20px",
                  marginBottom: "16px",
                  borderRadius: "0 0.75rem 0.75rem 0",
                }}
              >
                <p style={{ color: "#F2F2F2", fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px" }}>
                  Nao vendemos os seus dados pessoais a terceiros.
                </p>
                <p style={{ color: "#888888", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  Esta e uma garantia absoluta do portugaltopjogossites. Os seus dados nunca sao comercializados ou cedidos para fins publicitarios.
                </p>
              </div>
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "12px" }}>
                Podemos partilhar informacoes limitadas com os seguintes terceiros:
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {[
                  "Fornecedores de infraestrutura tecnica (hosting, CDN, seguranca)",
                  "Servicos de analise de trafego (exclusivamente dados anonimizados e agregados)",
                  "Autoridades competentes quando exigido por lei portuguesa ou europeia",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      color: "#888888",
                      fontSize: "0.83rem",
                      lineHeight: 1.6,
                      marginBottom: "10px",
                      paddingLeft: "14px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#D4AF37" }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 6 */}
            <section>
              <SectionHeading number="06" title="Os Seus Direitos ao Abrigo do RGPD" />
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["Acesso", "Solicitar uma copia dos dados pessoais que temos sobre si."],
                  ["Retificacao", "Corrigir dados incorretos, incompletos ou desatualizados."],
                  ["Apagamento", "Solicitar a eliminacao dos seus dados pessoais."],
                  ["Limitacao", "Restringir o processamento em determinadas circunstancias."],
                  ["Portabilidade", "Receber os seus dados num formato estruturado e legivel por maquina."],
                  ["Oposicao", "Opor-se ao processamento baseado em interesse legitimo."],
                  ["Retirar consentimento", "A qualquer momento, sem efeitos retroativos sobre tratamentos anteriores."],
                  ["Reclamacao junto da CNPD", "Comissao Nacional de Protecao de Dados, em www.cnpd.pt."],
                ].map(([right, desc]) => (
                  <div
                    key={right as string}
                    style={{
                      border: "1px solid #282828",
                      backgroundColor: "#161616",
                      padding: "14px 16px",
                      borderRadius: "0.75rem",
                    }}
                  >
                    <p style={{ color: "#D4AF37", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.05em", marginBottom: "5px" }}>
                      {right}
                    </p>
                    <p style={{ color: "#777777", fontSize: "0.8rem", lineHeight: 1.5 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7 */}
            <section>
              <SectionHeading number="07" title="Seguranca dos Dados" />
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "14px" }}>
                Implementamos medidas tecnicas e organizacionais adequadas para proteger os dados dos utilizadores
                contra acesso nao autorizado, alteracao, divulgacao ou destruicao inadvertida, incluindo:
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {[
                  "Encriptacao SSL/TLS em todas as comunicacoes entre o utilizador e o servidor",
                  "Acesso restrito aos dados unicamente a pessoal tecnico autorizado",
                  "Monitorizacao continua de seguranca e aplicacao regular de atualizacoes",
                  "Backups cifrados com procedimentos de recuperacao testados periodicamente",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      color: "#888888",
                      fontSize: "0.83rem",
                      lineHeight: 1.6,
                      marginBottom: "10px",
                      paddingLeft: "14px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#D4AF37" }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 8 */}
            <section>
              <SectionHeading number="08" title="Retencao de Dados" />
              <div style={{ overflowX: "auto", borderRadius: "1rem", overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.83rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#202020" }}>
                      {["Categoria", "Periodo de Retencao"].map((h) => (
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
                      ["Dados de analytics", "Maximo de 26 meses (anonimizados automaticamente apos 6 meses)"],
                      ["Logs de servidor", "Maximo de 12 meses"],
                      ["Preferencias de cookies", "Ate serem eliminadas pelo utilizador (maximo 12 meses)"],
                      ["Dados agregados anonimizados", "Indefinidamente, sem ligacao a individuos identificados"],
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

            {/* 9 */}
            <section>
              <SectionHeading number="09" title="Atualizacoes desta Politica" />
              <p style={{ color: "#AAAAAA", fontSize: "0.88rem", lineHeight: 1.8 }}>
                Esta politica pode ser revista para refletir alteracoes nos nossos servicos ou nos requisitos legais
                aplicaveis. A data de ultima atualizacao e sempre indicada no cabecalho desta pagina.
                Para alteracoes significativas, publicaremos um aviso destacado no site com antecedencia minima de 15 dias.
              </p>
            </section>

            {/* Compliance */}
            <div
              style={{
                border: "1px solid #282828",
                backgroundColor: "#141414",
                padding: "20px 24px",
                borderRadius: "1rem",
              }}
            >
              <p style={{ color: "#555555", fontSize: "0.78rem", lineHeight: 1.7, textAlign: "center" }}>
                Esta politica foi elaborada em conformidade com o Regulamento (UE) 2016/679 (RGPD),
                a Lei n.o 58/2019, de 8 de agosto (Lei de Execucao do RGPD em Portugal),
                e demais legislacao nacional aplicavel. Para exercer os seus direitos ou apresentar reclamacao,
                contacte a CNPD atraves de www.cnpd.pt.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
