"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid #282828" }}>
      {/* Gold top line */}
      <div style={{ height: "3px", backgroundColor: "#D4AF37" }} />

      <div className="container mx-auto max-w-[1220px] px-4 pt-12 pb-8">

        {/* Top row: wordmark + nav + 18+ */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">

          {/* Wordmark + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-4 mb-3" aria-label="portugaltopjogossites - pagina inicial">
              {/* Icon — larger than header, centred */}
              <div
                className="flex items-center justify-center rounded-xl overflow-hidden shrink-0"
                style={{
                  width: "68px",
                  height: "68px",
                  border: "2px solid #D4AF37",
                }}
              >
                <Image
                  src="/logo.jpg"
                  alt="portugaltopjogossites logo"
                  width={68}
                  height={68}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Two-line wordmark — same structure as header, slightly larger */}
              <div className="flex flex-col leading-none select-none gap-1">
                <div
                  className="flex items-baseline gap-0"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  <span className="text-2xl font-bold tracking-tight" style={{ color: "#D4AF37" }}>portugal</span>
                  <span
                    className="text-2xl font-extrabold tracking-tight mx-0.5 px-1.5 rounded"
                    style={{ color: "#0D0D0D", backgroundColor: "#D4AF37", lineHeight: 1 }}
                  >
                    top
                  </span>
                  <span className="text-2xl font-bold tracking-tight" style={{ color: "#C0272D" }}>jogos</span>
                  <span className="text-2xl font-semibold tracking-tight" style={{ color: "#F2F2F2" }}>sites</span>
                </div>
                <span
                  className="text-[11px] tracking-[0.18em] uppercase font-sans"
                  style={{ color: "#555555" }}
                >
                  portugaltopjogossites.com
                </span>
              </div>
            </Link>
            <p style={{ color: "#555555", fontSize: "0.75rem", marginTop: "4px" }}>
              Comparador independente de sites de jogos licenciados pelo SRIJ
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-2">
            <p
              style={{
                color: "#D4AF37",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Legal
            </p>
            <Link
              href="/politica-privacidade"
              style={{ color: "#888888", fontSize: "0.85rem" }}
              className="hover:text-white transition-colors"
            >
              Politica de Privacidade
            </Link>
            <Link
              href="/politica-cookies"
              style={{ color: "#888888", fontSize: "0.85rem" }}
              className="hover:text-white transition-colors"
            >
              Politica de Cookies
            </Link>
          </nav>

          {/* 18+ badge */}
          <div className="flex items-center gap-3">
            <div
              style={{
                width: "52px",
                height: "52px",
                border: "2px solid #D4AF37",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                backgroundColor: "rgba(212,175,55,0.06)",
              }}
            >
              <span style={{ color: "#D4AF37", fontWeight: 700, fontSize: "0.85rem" }}>18+</span>
            </div>
            <div>
              <p style={{ color: "#F2F2F2", fontWeight: 600, fontSize: "0.8rem" }}>Jogo Responsavel</p>
              <p style={{ color: "#666666", fontSize: "0.75rem" }}>Proibido a menores de 18 anos</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#282828", marginBottom: "32px" }} />

        {/* Organizacoes de Apoio */}
        <div className="mb-10">
          <p
            style={{
              color: "#D4AF37",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Organizacoes de Apoio ao Jogo Responsavel
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { href: "https://www.srij.turismodeportugal.pt", src: "/srij.svg", alt: "SRIJ", whiteBg: false },
              { href: "https://www.sicad.pt", src: "/icad.png", alt: "SICAD", whiteBg: false },
              { href: "https://www.gamcare.org.uk", src: "/gamecare.svg", alt: "GamCare", whiteBg: true },
              { href: "https://www.gambleaware.org", src: "/gamble.webp", alt: "GambleAware", whiteBg: true },
              { href: "https://www.jogoresponsavel.pt", src: "/jogo2.png", alt: "Jogo Responsavel", whiteBg: false },
            ].map((org) => (
              <Link
                key={org.alt}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 transition-colors"
                style={{
                  border: "1px solid #282828",
                  backgroundColor: org.whiteBg ? "#FFFFFF" : "#161616",
                  borderRadius: "0.75rem",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#D4AF37")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#282828")}
              >
                <img
                  src={org.src}
                  alt={org.alt}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#282828", marginBottom: "24px" }} />

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p style={{ color: "#444444", fontSize: "0.75rem" }}>
            &copy; 2026 portugaltopjogossites.com -- Todos os direitos reservados
          </p>
          <p style={{ color: "#444444", fontSize: "0.75rem" }}>
            O jogo pode causar dependencia. Apenas para maiores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  )
}
