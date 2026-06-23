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
          <p className="heading-display">Pentagono Village è un progetto ambizioso ad alto potenziale</p>
          <p className="body-large text-text-secondary">La struttura grande, la varietà di servizi che offrirete, il livello generale che farebbe competizione alle migliori strutture in centro città.</p>
          <p className="body-large text-text-primary font-bold">Ma che senso ha se non lo conoscono tutti?</p>
        </div>
      </div>

      {/* Right: image */}
      <div className="w-1/2 relative">
        <Image
          src="/pentagono-pizza.png"
          alt="Pentagono Village — La pizza prende forma"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
