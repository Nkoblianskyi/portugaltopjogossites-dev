"use client"

import { X } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"
import { useEffect, useState } from "react"
import { bettingSites } from "@/lib/mock-data"

interface CasinoModalProps {
  site?: BettingSite
  rank?: number
  isOpen?: boolean
  onClose?: () => void
}

export function CasinoModal({ site: propSite, rank: propRank, isOpen: propIsOpen = false, onClose }: CasinoModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [autoOpenSite, setAutoOpenSite] = useState<BettingSite | null>(null)

  useEffect(() => {
    if (!propSite) {
      const hasShown = sessionStorage.getItem("promo-modal-shown")
      if (!hasShown) {
        const timer = setTimeout(() => {
          setAutoOpenSite(bettingSites[0])
          setInternalOpen(true)
          sessionStorage.setItem("promo-modal-shown", "true")
        }, 10000)
        return () => clearTimeout(timer)
      }
    }
  }, [propSite])

  useEffect(() => {
    if (propSite) {
      setInternalOpen(propIsOpen)
    }
  }, [propIsOpen, propSite])

  const handleClose = () => {
    setInternalOpen(false)
    setAutoOpenSite(null)
    onClose?.()
  }

  const site = propSite || autoOpenSite
  const rank = propRank || 1

  if (!internalOpen || !site) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -right-3 -top-3 z-20 flex items-center justify-center"
          style={{
            width: "34px",
            height: "34px",
            backgroundColor: "#202020",
            border: "1px solid #333333",
            borderRadius: "9999px",
            cursor: "pointer",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "#D4AF37")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "#333333")}
          aria-label="Fechar"
        >
          <X style={{ width: "14px", height: "14px", color: "#F2F2F2" }} />
        </button>

        <div
          style={{
            backgroundColor: "#161616",
            border: "1px solid #D4AF37",
            borderRadius: "1.25rem",
            overflow: "hidden",
          }}
        >
          {/* Gold top line */}
          <div style={{ height: "3px", backgroundColor: "#D4AF37" }} />

          {/* Header label */}
          <div
            style={{
              backgroundColor: "#C0272D",
              textAlign: "center",
              padding: "8px 16px",
            }}
          >
            <p
              style={{
                color: "#F2F2F2",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Oferta Exclusiva Disponivel
            </p>
          </div>

          <div className="p-6 flex flex-col items-center gap-5">
            {/* Rank badge circle */}
            <div
              style={{
                width: "44px",
                height: "44px",
                border: "2px solid #D4AF37",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(212,175,55,0.08)",
              }}
            >
              <span
                style={{
                  color: "#D4AF37",
                  fontWeight: 700,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "0.95rem",
                }}
              >
                #{rank}
              </span>
            </div>

            {/* Logo */}
            <div
              style={{
                backgroundColor: "#000000",
                padding: "12px 20px",
                border: "1px solid #282828",
                borderRadius: "0.75rem",
              }}
            >
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                style={{ width: "160px", height: "72px", objectFit: "contain" }}
              />
            </div>

            {/* Bonus */}
            <div
              className="text-center w-full"
              style={{
                borderTop: "1px solid #282828",
                borderBottom: "1px solid #282828",
                padding: "14px 0",
              }}
            >
              <p style={{ color: "#D4AF37", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                Oferta de Boas-Vindas
              </p>
              <p style={{ color: "#F2F2F2", fontWeight: 600, fontSize: "1rem", lineHeight: 1.3 }}>
                {site.bonus}
              </p>
            </div>

            {/* Rating */}
            <div className="text-center">
              <div style={{ color: "#D4AF37", fontWeight: 700, fontSize: "1.8rem", lineHeight: 1 }}>
                {site.rating.toFixed(1)}
                <span style={{ color: "#555555", fontSize: "0.75rem" }}>/10</span>
              </div>
              <div className="flex justify-center mt-2 mb-1">
                <StarRating rating={site.rating / 2} size="md" showHover />
              </div>
              <p style={{ color: "#555555", fontSize: "0.7rem" }}>({site.reviews} avaliacoes)</p>
            </div>

            {/* CTA */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(site.url, "_blank")
              }}
              style={{
                width: "100%",
                backgroundColor: "#C0272D",
                color: "#F2F2F2",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "14px",
                border: "none",
                borderRadius: "0.75rem",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#E03540")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C0272D")}
            >
              Obter Bonus Agora
            </button>

            <p style={{ color: "#555555", fontSize: "0.65rem", textAlign: "center" }}>
              18+ | Apenas para utilizadores em Portugal | Jogue com responsabilidade
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
