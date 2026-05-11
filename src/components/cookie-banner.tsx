"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#0D0D0D",
        borderTop: "1px solid #282828",
      }}
    >
      {/* Gold top line */}
      <div style={{ height: "3px", backgroundColor: "#D4AF37" }} />

      <div className="container mx-auto max-w-[1220px] px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex-1">
            <p
              style={{
                color: "#D4AF37",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "6px",
                fontWeight: 600,
              }}
            >
              Informacao sobre Cookies
            </p>
            <p style={{ color: "#AAAAAA", fontSize: "0.82rem", lineHeight: 1.6 }}>
              O site portugaltopjogossites.com utiliza cookies tecnicos e analiticos para melhorar a experiencia de navegacao e analisar o trafego de forma anonima. Ao continuar a navegar, aceita a nossa{" "}
              <Link
                href="/politica-privacidade"
                style={{ color: "#D4AF37", textDecoration: "underline" }}
              >
                Politica de Privacidade
              </Link>{" "}
              e{" "}
              <Link
                href="/politica-cookies"
                style={{ color: "#D4AF37", textDecoration: "underline" }}
              >
                Politica de Cookies
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={rejectCookies}
              style={{
                backgroundColor: "transparent",
                border: "1px solid #333333",
                color: "#888888",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 20px",
                borderRadius: "0.75rem",
                cursor: "pointer",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#888888"
                e.currentTarget.style.color = "#F2F2F2"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#333333"
                e.currentTarget.style.color = "#888888"
              }}
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              style={{
                backgroundColor: "#C0272D",
                color: "#F2F2F2",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "10px 20px",
                border: "none",
                borderRadius: "0.75rem",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#E03540")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C0272D")}
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
