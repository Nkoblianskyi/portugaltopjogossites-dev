import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #282828" }}
    >
      <div className="container mx-auto max-w-[1220px] px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Wordmark + logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="portugaltopjogossites - pagina inicial">
            {/* Icon */}
            <div
              className="flex items-center justify-center w-20 h-20 rounded-xl overflow-hidden shrink-0"
              style={{ border: "2px solid #D4AF37" }}
            >
              <Image
                src="/logo.jpg"
                alt="portugaltopjogossites logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Two-line wordmark */}
            <div className="flex flex-col leading-none select-none gap-0.5">
              {/* Main name split into readable segments with spacing */}
              <div
                className="flex items-baseline gap-0"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                <span className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: "#D4AF37" }}>portugal</span>
                <span
                  className="text-lg sm:text-xl font-extrabold tracking-tight mx-0.5 px-1 rounded"
                  style={{ color: "#0D0D0D", backgroundColor: "#D4AF37", lineHeight: 1 }}
                >
                  top
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: "#C0272D" }}>jogos</span>
                <span className="text-lg sm:text-xl font-semibold tracking-tight" style={{ color: "#F2F2F2" }}>sites</span>
              </div>
              {/* Domain subtitle */}
              <span
                className="text-[10px] tracking-[0.18em] uppercase font-sans"
                style={{ color: "#555555" }}
              >
                portugaltopjogossites.com
              </span>
            </div>
          </Link>

          {/* Right side: domain + SRIJ */}
          <div className="flex items-center gap-4">

            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              aria-label="SRIJ - Servico de Regulacao e Inspecao de Jogos"
            >
              <Image src="/srij.svg" alt="SRIJ" width={28} height={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <div style={{ height: "2px", backgroundColor: "#D4AF37", width: "100%", borderRadius: "9999px" }} />
    </header>
  )
}
