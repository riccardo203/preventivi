import Image from "next/image"

const STEPS = [
  {
    n: "1",
    title: "Mi dite sì",
    body: "Si decide di procedere.",
  },
  {
    n: "2",
    title: "Contratto e primo pagamento",
    body: "Formalizziamo tutto con un contratto chiaro.",
  },
  {
    n: "3",
    title: "Kick-off",
    body: "Vi presento il team, definiamo le priorità e partiamo.",
  },
]

export function ProssimiPassi() {
  return (
    <section
      className="h-screen bg-white flex flex-col justify-center px-16 py-20"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <p className="label-section mb-10">Cosa succede adesso</p>
      <h2 className="heading-display mb-16 max-w-lg">
        Quando siete pronti, si parte.
      </h2>

      <div className="grid grid-cols-3 gap-10 mb-16">
        {STEPS.map((step) => (
          <div key={step.n} className="border-t border-border pt-8">
            <p className="text-4xl font-light text-text-muted mb-6">{step.n}</p>
            <h3 className="text-base font-semibold text-text-primary mb-3">{step.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <Image src="/omira-logo-new.png" alt="Omira" width={80} height={27} />
        <div className="w-px h-5 bg-border" />
        <p className="text-text-muted text-sm">hello@byrivon.com</p>
      </div>
    </section>
  )
}
