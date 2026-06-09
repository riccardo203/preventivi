import Image from "next/image"

export function Cover() {
  return (
    <section
      className="h-screen p-3 md:p-5 flex bg-white"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <div className="flex-1 relative rounded-2xl overflow-hidden flex flex-col">
        <Image
          src="/background-omira-orange.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col h-full px-16 py-12">
          <Image
            src="/omira-logo-new.png"
            alt="Omira"
            width={96}
            height={32}
            className="brightness-0 invert"
          />

          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.22em] text-white font-medium mb-8">
              Una proposta di partnership
            </p>
            <h1
              className="font-light text-white leading-none"
              style={{ fontSize: "clamp(4rem, 10vw, 7rem)", letterSpacing: "-0.02em" }}
            >
              Centro Sportivo Settimo
            </h1>
            <p className="text-white text-lg font-light mt-6">
              Villasimius · Sardegna
            </p>
          </div>

          <div className="flex justify-between items-end text-white text-xs tracking-wide">
            <span>Omira by Rivon</span>
            <span>Giugno 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
