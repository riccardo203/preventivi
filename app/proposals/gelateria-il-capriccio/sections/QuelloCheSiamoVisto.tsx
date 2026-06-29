import Image from "next/image"

export function QuelloCheSiamoVisto() {
  return (
    <section
      className="h-screen flex overflow-hidden"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      {/* Left: text */}
      <div className="w-1/2 bg-white flex flex-col justify-start pt-24 px-16">
        <p className="label-section mb-8">Quello che abbiamo visto</p>
        <div className="max-w-lg space-y-8">
          <p className="heading-display">Questa gelateria ha un enorme potenziale, sia d'estate che d'inverno.</p>
          <p className="body-large text-text-secondary">Gli obiettivi di fatturato sono ampiamente raggiungibili.</p>
        </div>
      </div>

      {/* Right: image */}
      <div className="w-1/2 relative">
        <Image
          src="/gelateria-capriccio.png"
          alt="Gelateria Il Capriccio"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
