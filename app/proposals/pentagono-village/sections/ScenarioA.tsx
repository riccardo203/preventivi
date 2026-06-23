const PACKAGES = [
  {
    name: "Refresh Branding",
    price: "500€",
    originalPrice: null,
    note: "una tantum",
    urgent: false,
    features: [
      "Restyling logo",
      "Palette colori e font coordinati",
      "Template grafici per i social",
      "Mini brand book / linee guida",
      "File esecutivi pronti all'uso",
    ],
  },
  {
    name: "Sito Web",
    price: "1.200€",
    originalPrice: "1.500€",
    note: "una tantum",
    urgent: false,
    features: [
      "Sito vetrina responsive",
      "Design su misura",
      "Sezione menù e servizi",
      "Integrazione contatti e mappa",
      "Ottimizzazione SEO base",
      "Ottimizzazione Mobile",
      "Dominio e setup hosting",
      "Qr codes da tavolo per menu (design)",
    ],
  },
  {
    name: "Contenuti pre-apertura + Meta Ads",
    price: "1.200€",
    originalPrice: "1.500€",
    note: "pre-apertura",
    urgent: true,
    features: [
      "Shooting foto e video in loco + inaugurazione",
      "Piano editoriale teaser pre-apertura",
      "Contenuti per il countdown apertura",
      "Setup e gestione campagne Meta Ads",
      "Targeting locale sulla zona",
      "Reportistica sui risultati",
    ],
  },
]

export function ScenarioA() {
  return (
    <section
      className="h-screen flex flex-col px-16 pt-12 pb-10"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always", background: "#1a1a2e" }}
    >
      <div className="mb-6">
        <p className="label-section mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Opzione 1 — Pre-lancio</p>
        <h2 className="heading-display !text-white mb-3">Arrivare pronti all'apertura</h2>
        <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.4)" }}>Tre interventi una tantum per costruire il brand, la presenza online e l'attesa prima del giorno zero.</p>
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className="flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: pkg.urgent ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${pkg.urgent ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`,
              boxShadow: pkg.urgent ? "0 20px 60px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
            <div className="px-8 pt-6 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-sm uppercase tracking-widest font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{pkg.name}</p>
                {pkg.urgent && (
                  <span className="text-xs px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: "rgba(255,180,120,0.16)", color: "rgba(255,200,150,0.95)" }}>
                    Urgente
                  </span>
                )}
              </div>
              <p className="text-base line-through" style={{ color: "rgba(255,255,255,0.3)", visibility: pkg.originalPrice ? "visible" : "hidden" }}>{pkg.originalPrice ?? " "}</p>
              <p className="font-light text-white leading-none" style={{ fontSize: "2.9rem", letterSpacing: "-0.02em" }}>
                {pkg.price}
              </p>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>{pkg.note}</p>
            </div>

            <div className="flex-1 flex flex-col justify-start px-8 py-5">
              <ul className="space-y-3.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.4)" }} />
                    <span className="text-base leading-snug" style={{ color: "rgba(255,255,255,0.62)" }}>{f}</span>
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
