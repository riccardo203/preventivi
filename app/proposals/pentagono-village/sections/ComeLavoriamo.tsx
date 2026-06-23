const STEPS = [
  {
    n: "01",
    title: "Analisi",
    body: "Studiamo quello che avete: il pubblico, la voce, la concorrenza, il territorio.",
  },
  {
    n: "02",
    title: "Strategia",
    body: "Definiamo insieme la direzione. Cosa raccontare, a chi, su quali canali, con quale tono.",
  },
  {
    n: "03",
    title: "Produzione",
    body: "Costruiamo il sito e i contenuti. Foto, video, testi, grafiche. Tutto curato.",
  },
  {
    n: "04",
    title: "Crescita e Controllo",
    body: "Monitoriamo i risultati, verifichiamo che tutto funzioni come deve e aggiustiamo dove serve.",
  },
]

export function ComeLavoriamo() {
  return (
    <section
      className="h-screen flex flex-col justify-center px-16 py-20"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always", background: "#1a1a2e" }}
    >
      <p className="label-section mb-14" style={{ color: "rgba(255,255,255,0.35)" }}>
        Come lavoriamo
      </p>
      <div className="grid grid-cols-4 gap-8">
        {STEPS.map((step) => (
          <div key={step.n} className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <p className="text-6xl font-light mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>{step.n}</p>
            <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
