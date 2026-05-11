"use client"

import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  const isFirstItem = rank === 1

  return (
    <div className="relative">
      {/* Badge pill */}
      {site.badge && (
        <div className="absolute -top-3 left-4 z-30">
          <div
            style={{
              backgroundColor: "#C0272D",
              color: "#F2F2F2",
              padding: "4px 16px",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              borderRadius: "9999px",
            }}
          >
            {site.badge}
          </div>
        </div>
      )}

      <div
        onClick={() => window.open(site.url, "_blank")}
        className="cursor-pointer group"
        style={{
          backgroundColor: "#161616",
          border: isFirstItem ? "1px solid #D4AF37" : "1px solid #282828",
          borderRadius: "1rem",
          overflow: "hidden",
          transition: "border-color 0.2s ease",
        }}
        onMouseEnter={e => {
          if (!isFirstItem) (e.currentTarget as HTMLDivElement).style.borderColor = "#D4AF37"
        }}
        onMouseLeave={e => {
          if (!isFirstItem) (e.currentTarget as HTMLDivElement).style.borderColor = "#282828"
        }}
      >
        {/* Gold top bar for rank 1 */}
        {isFirstItem && (
          <div style={{ height: "3px", backgroundColor: "#D4AF37" }} />
        )}

        <div className="p-5 sm:p-6">

          {/* Desktop layout */}
          <div className="hidden md:flex md:items-center md:gap-5 lg:gap-7">

            {/* Logo */}
            <div
              style={{
                backgroundColor: "#000000",
                padding: "10px 16px",
                border: "1px solid #282828",
                borderRadius: "0.75rem",
                flexShrink: 0,
              }}
            >
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                style={{ width: "130px", height: "68px", objectFit: "contain" }}
              />
            </div>

            {/* Bonus */}
            <div className="flex-1 flex flex-col items-center text-center">
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "5px",
                  fontWeight: 600,
                }}
              >
                Oferta de Boas-Vindas
              </p>
              <p style={{ color: "#F2F2F2", fontWeight: 700, fontSize: "1.35rem", lineHeight: 1.2, overflowWrap: "break-word" }}>
                {site.bonus}
              </p>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center" style={{ flexShrink: 0, minWidth: "90px" }}>
              <div style={{ color: "#D4AF37", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1 }}>
                {site.rating.toFixed(1)}
                <span style={{ color: "#555555", fontSize: "0.7rem" }}>/10</span>
              </div>
              <div className="flex justify-center mt-1.5">
                <StarRating rating={site.rating / 2} size="xs" showHover />
              </div>
              <p style={{ color: "#555555", fontSize: "0.62rem", marginTop: "4px", textAlign: "center" }}>
                {site.reviews} avaliacoes
              </p>
            </div>

            {/* CTA */}
            <div style={{ flexShrink: 0 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(site.url, "_blank")
                }}
                style={{
                  backgroundColor: "#1a7a3c",
                  color: "#F2F2F2",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "0.75rem",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#21964a")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1a7a3c")}
              >
                Obter Bonus Agora
              </button>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden space-y-3">

            {/* Row 1 — logo + bonus */}
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div
                style={{
                  backgroundColor: "#000",
                  padding: "6px 10px",
                  border: "1px solid #282828",
                  borderRadius: "0.65rem",
                  flexShrink: 0,
                }}
              >
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  style={{ width: "90px", height: "44px", objectFit: "contain" }}
                />
              </div>

              {/* Bonus */}
              <div className="flex-1">
                <p style={{ color: "#D4AF37", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3px", fontWeight: 600 }}>
                  Boas-Vindas
                </p>
                <p style={{ color: "#F2F2F2", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.25, wordBreak: "break-word", overflowWrap: "anywhere" }}>
                  {site.bonus}
                </p>
              </div>
            </div>

            {/* Row 2 — rating + stars + reviews + CTA button */}
            <div className="flex items-center gap-3">
              {/* Score */}
              <div style={{ flexShrink: 0, textAlign: "center", minWidth: "36px" }}>
                <span style={{ color: "#D4AF37", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>
                  {site.rating.toFixed(1)}
                </span>
                <span style={{ color: "#555", fontSize: "0.6rem" }}>/10</span>
              </div>

              {/* Stars + reviews */}
              <div className="flex flex-col items-center gap-0.5 flex-1 min-w-0">
                <StarRating rating={site.rating / 2} size="xs" showHover />
                <span style={{ color: "#555555", fontSize: "0.6rem", textAlign: "center" }}>
                  {site.reviews} avaliacoes
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(site.url, "_blank")
                }}
                style={{
                  flexShrink: 0,
                  backgroundColor: "#1a7a3c",
                  color: "#F2F2F2",
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "10px 14px",
                  border: "none",
                  borderRadius: "0.65rem",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#21964a")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1a7a3c")}
              >
                Obter Bonus
              </button>
            </div>
          </div>
        </div>

        {/* Responsible gambling strip */}
        <div
          style={{
            borderTop: "1px solid #282828",
            padding: "7px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              border: "1px solid #444444",
              color: "#888888",
              fontSize: "0.6rem",
              fontWeight: 700,
              padding: "2px 6px",
              letterSpacing: "0.05em",
              flexShrink: 0,
              borderRadius: "0.375rem",
            }}
          >
            18+
          </span>
          <span style={{ color: "#555555", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Jogo Responsavel
          </span>
          <span style={{ color: "#333333", fontSize: "0.65rem" }}>|</span>
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ color: "#555555", fontSize: "0.65rem", textDecoration: "none", letterSpacing: "0.04em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
          >
            jogoresponsavel.pt
          </a>
        </div>
      </div>
    </div>
  )
}
