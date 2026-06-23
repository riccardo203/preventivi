import { Globe } from "lucide-react"

const TIERS = [
  {
    name: "Essential",
    price: "1.100€",
    posts: "12–16 contenuti / mese",
    features: [
      "Shooting foto in loco",
      "Shooting video in loco (Videocamera/Iphone)",
      "Editing ottimizzato social",
      "Pianificazione editoriale e copywriting",
      "Setup e gestione Meta Ads",
      "Instagram, Facebook",
      "Reportistica mensile",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "1.400€",
    posts: "16–20 contenuti / mese",
    features: [
      "Shooting foto in loco",
      "Shooting video in loco (Videocamera/Iphone/Insta 360)",
      "Editing ottimizzato social",
      "Pianificazione editoriale e copywriting+",
      "Stories quotidiane",
      "Gestione e moderazione community",
      "Setup e gestione Meta Ads",
      "Instagram, Facebook e TikTok",
      "Reportistica mensile",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "2.200€",
    posts: "20+ contenuti / mese",
    features: [
      "Shooting foto in loco",
      "Shooting video in loco (Videocamera/Iphone/Insta 360)",
      "Editing ottimizzato social",
      "Pianificazione editoriale e copywriting+",
      "Stories avanzate e interattive",
      "Gestione e moderazione community avanzata",
      "Approccio Experimental: A/B test scientifici dei contenuti",
      "Setup e gestione Meta Ads avanzato",
      "Instagram, Facebook e TikTok",
      "Reportistica mensile avanzata",
    ],
    highlighted: false,
  },
]

export function ScenarioB() {
  return (
    <section
      className="h-screen flex flex-col px-16 pt-12 pb-10"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always", background: "#1a1a2e" }}
    >
      <div className="mb-6">
        <p className="label-section mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Opzione 2 — Comunicazione continuativa</p>
        <h2 className="heading-display !text-white mb-3">Dopo l'apertura, far crescere il locale</h2>
        <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.4)" }}>Tutti i piani sono completi. Cambiano il volume e il livello di investimento.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: tier.highlighted ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${tier.highlighted ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`,
              boxShadow: tier.highlighted ? "0 20px 60px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
            <div className="px-8 pt-6 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-center justify-between mb-3.5">
                <p className="text-sm uppercase tracking-widest font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{tier.name}</p>
                {tier.highlighted && (
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
                    Consigliato
                  </span>
                )}
              </div>
              <p className="font-light text-white leading-none" style={{ fontSize: "2.6rem", letterSpacing: "-0.02em" }}>
                {tier.price}
              </p>
              <p className="text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>/al mese</p>
            </div>

            {/* Sito web dilazionato */}
            <div className="flex items-center gap-3 px-8 py-2" style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Globe className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.5)" }} strokeWidth={2} />
              <p className="flex-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>Sito web dilazionato</p>
              <div className="text-right">
                <p className="text-[11px] line-through" style={{ color: "rgba(255,255,255,0.3)" }}>1.200€</p>
                <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>200€/mese</p>
                <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>× 6 mesi</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-start px-8 py-4">
              <p className="text-xs font-medium mb-2.5" style={{ color: "rgba(255,255,255,0.65)" }}>{tier.posts}</p>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.4)" }} />
                    <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
