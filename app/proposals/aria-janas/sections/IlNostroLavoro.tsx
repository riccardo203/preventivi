import Image from "next/image"

const REVIEW = {
  quote: "Le abbiamo provate davvero tutte. The Fork, Trip Advisor, postavamo per conto nostro su Instagram ma non arrivavano risultati. Stiamo lavorando con loro da quasi due anni e il nostro fatturato del 2024 è aumentato del 40% circa. Forse dovevamo incontrarvi prima.",
  author: "Matteo Cuscusa",
  title: "Proprietario, Transumanza",
}

const STATS = [
  { value: "+32%", label: "Fatturato annuale" },
  { value: "2,8x", label: "ROI marketing" },
  { value: "+113%", label: "Bassa stagione" },
]

const SECTIONS = [
  {
    title: "La sfida",
    body: "Un ristorante legato al territorio con una stagionalità che pesava sul bilancio. Serviva una presenza digitale che funzionasse tutto l'anno.",
  },
  {
    title: "Il lavoro",
    body: "Contenuti Instagram, campagne Meta su pubblico locale e turistico, sito web bilingue. Tre leve pensate per funzionare insieme.",
  },
  {
    title: "Il risultato",
    body: "La crescita più significativa è arrivata proprio nei mesi più difficili. E la collaborazione è andata avanti.",
  },
]

export function IlNostroLavoro() {
  return (
    <section
      className="h-screen flex overflow-hidden"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <div className="w-1/2 relative flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="/transumanza/hero.jpeg"
            alt="Transumanza"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(26,26,46,0.72)" }} />
        </div>
        <div className="relative z-10 px-14 pt-24 pb-14 flex flex-col h-full">
          <div>
            <Image src="/transumanza/logo.png" alt="Transumanza" width={240} height={72} className="object-contain mb-12 brightness-0 invert" style={{ objectPosition: "left" }} />
            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.value} className="border-t pt-5" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
                  <p className="text-3xl font-light text-white mb-1">{stat.value}</p>
                  <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-lg font-light text-white leading-relaxed mb-4" style={{ fontStyle: "italic" }}>
              "{REVIEW.quote}"
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{REVIEW.author} · {REVIEW.title}</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-between px-14 pt-24 pb-14">
        <div>
          <p className="label-section mb-6">Il nostro lavoro</p>
          <h2 className="heading-display mb-4">Dal racconto<br />ai risultati.</h2>
          <p className="text-sm text-text-muted max-w-xs leading-relaxed">
            Far crescere un ristorante della tradizione sarda anche in bassa stagione.
          </p>
        </div>

        <div>
          <p className="label-section mb-6">Transumanza · Cagliari</p>
          <div className="space-y-6">
            {SECTIONS.map((s) => (
              <div key={s.title} className="border-t border-border pt-5">
                <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">{s.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
