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
        <div className="max-w-lg space-y-12">
          <p className="heading-display">Centro Fitness offre un servizio super valido…</p>
          <p className="heading-display">Se foste i più seguiti a Cagliari, cosa succederebbe?</p>
        </div>
      </div>

      {/* Right: image */}
      <div className="w-1/2 relative">
        <Image
          src="/cf7sp-fitness-education.png"
          alt="CF7SP — Fitness Education"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
