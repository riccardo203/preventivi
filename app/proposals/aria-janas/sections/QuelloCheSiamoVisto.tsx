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
        <h2 className="heading-display max-w-lg">
          Aria e Janas Hotel meritano una presenza all'altezza di quello che avete costruito.
        </h2>
      </div>

      {/* Right: image */}
      <div className="w-1/2 relative">
        <Image
          src="/wine-service.jpeg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
