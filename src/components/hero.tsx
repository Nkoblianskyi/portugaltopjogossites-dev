import Image from "next/image"

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const trustItems = [
    { label: "Licenciados pelo SRIJ", icon: "srij" },
    { label: "Analise Independente", icon: "dot" },
    { label: "Depositos Seguros", icon: "dot" },
    { label: "Atualizados 2026", icon: "dot" },
    { label: "18+", icon: "age" },
  ]

  return (
    <section
      className="w-full"
      style={{ borderBottom: "1px solid #282828" }}
    >
      {/* Wrapper: 250px max on mobile, taller on sm+ */}
      <div
        className="w-full flex items-center relative overflow-hidden"
        style={{ minHeight: "250px", maxHeight: "250px" }}
      >
        {/* Background image — mobile only clipped to 250px */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.72)" }} />

        {/* Mobile content — compact, centred, max 250px */}
        <div className="relative z-10 w-full px-4 py-5 flex flex-col items-center justify-center sm:hidden">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full"
            style={{ backgroundColor: "rgba(212,175,55,0.14)", border: "1px solid rgba(212,175,55,0.35)" }}
          >
            <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#D4AF37" }}>
              Ranking Oficial 2026
            </span>
            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#C0272D" }} />
            <span className="text-[10px] tracking-wide" style={{ color: "#888888" }}>{formattedDate}</span>
          </div>

          {/* Heading — compact */}
          <h1
            className="text-center mb-2 text-balance"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, lineHeight: 1.15 }}
          >
            <span className="block text-xl" style={{ color: "#D4AF37" }}>Melhores Sites de Jogos</span>
            <span className="block text-xl" style={{ color: "#F2F2F2" }}>Online em Portugal</span>
          </h1>

          {/* Trust pills — single row, scroll horizontally if needed */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full justify-center flex-wrap mt-1">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full shrink-0"
              style={{ backgroundColor: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#D4AF37" }} />
              <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: "#F2F2F2" }}>Licenciados SRIJ</span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full shrink-0"
              style={{ backgroundColor: "rgba(192,39,45,0.12)", border: "1px solid rgba(192,39,45,0.35)" }}>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#C0272D" }} />
              <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: "#F2F2F2" }}>Verificados</span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full shrink-0"
              style={{ backgroundColor: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#D4AF37" }} />
              <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: "#F2F2F2" }}>Pagamentos Rapidos</span>
            </div>
            <div className="flex items-center justify-center px-2.5 py-1 rounded-full shrink-0"
              style={{ backgroundColor: "rgba(0,0,0,0.4)", border: "1px solid #333333" }}>
              <span className="text-[10px] font-bold tracking-wider" style={{ color: "#888888" }}>18+</span>
            </div>
          </div>
        </div>

        {/* Tablet + Desktop content — hidden on mobile */}
        <div className="container mx-auto px-4 relative z-10 py-6 hidden sm:flex sm:flex-col sm:items-center sm:justify-center w-full">
          <div className="max-w-2xl mx-auto text-center w-full">
            {/* Gold top tag */}
            <div
              className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.35)" }}
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase" style={{ color: "#D4AF37" }}>
                Ranking Oficial 2026
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C0272D" }} />
              <span className="text-[10px] sm:text-xs tracking-wide" style={{ color: "#888888" }}>{formattedDate}</span>
            </div>

            {/* Main heading — fits inside 250px */}
            <h1
              className="mb-3 text-balance"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, lineHeight: 1.1 }}
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl" style={{ color: "#D4AF37" }}>
                Melhores Sites de Jogos
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl" style={{ color: "#F2F2F2" }}>
                Online em Portugal
              </span>
            </h1>

            {/* Trust indicator pills */}
            <div className="flex flex-wrap justify-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)" }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#D4AF37" }} />
                <span className="text-[11px] font-medium" style={{ color: "#F2F2F2" }}>Licenciados pelo SRIJ</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "rgba(192,39,45,0.12)", border: "1px solid rgba(192,39,45,0.35)" }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#C0272D" }} />
                <span className="text-[11px] font-medium" style={{ color: "#F2F2F2" }}>Verificados por Especialistas</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)" }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#D4AF37" }} />
                <span className="text-[11px] font-medium" style={{ color: "#F2F2F2" }}>Pagamentos Rapidos</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "rgba(192,39,45,0.12)", border: "1px solid rgba(192,39,45,0.35)" }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#C0272D" }} />
                <span className="text-[11px] font-medium" style={{ color: "#F2F2F2" }}>Atualizados Mensalmente</span>
              </div>
              <div className="flex items-center justify-center px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "rgba(0,0,0,0.4)", border: "1px solid #333333" }}>
                <span className="text-[11px] font-bold tracking-wider" style={{ color: "#888888" }}>18+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
