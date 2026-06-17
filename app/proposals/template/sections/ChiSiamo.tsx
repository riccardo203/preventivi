import Image from "next/image"

const TEAM = [
  { name: "Riccardo Carboni",  role: "Co-founder",             src: "/founder-portraits/riccardo.jpeg", objectPosition: "center top" },
  { name: "Mattia Salardi",    role: "Co-founder",             src: "/founder-portraits/mattia.jpeg",   objectPosition: "center top" },
  { name: "Jonny Mason",       role: "Social Media Strategist", src: "/founder-portraits/jonny.jpeg",     objectPosition: "center 15%" },
  { name: "Camillo Lai",       role: "Media Buyer",             src: "/founder-portraits/camillo.jpeg",   objectPosition: "center top" },
  { name: "Gianmarco Milani",  role: "Videomaker & Editor",     src: "/founder-portraits/gianmarco.png", objectPosition: "center 15%" },
  { name: "Cristian Musiu",    role: "Fotografo",               src: "/founder-portraits/cristian.jpeg", objectPosition: "center top" },
]

export function ChiSiamo() {
  return (
    <section
      className="h-screen bg-white flex flex-col justify-between px-16 pt-24 pb-14 overflow-hidden"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      {/* Text block */}
      <div>
        <p className="label-section mb-6">Chi siamo</p>
        <h2 className="heading-display mb-5 max-w-2xl">
          Siamo un team tra Italia e UK.
        </h2>
        <p className="body-large max-w-xl">
          Omira è uno studio di marketing, comunicazione e digitale.
          Lavoriamo con imprenditori che tengono a come si raccontano.
          Non vendiamo servizi a catalogo.
        </p>
      </div>

      {/* Portrait row — square cards */}
      <div className="grid grid-cols-6 gap-3">
        {TEAM.map((person) => (
          <div key={person.name}>
            <div className="aspect-square relative overflow-hidden rounded-xl bg-[#d4d4d8]">
              {person.src && (
                <Image
                  src={person.src}
                  alt={person.name}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: person.objectPosition,
                  }}
                />
              )}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,26,46,0.5) 0%, transparent 50%)" }}
              />
            </div>
            <p className="text-sm font-medium text-text-primary mt-3">{person.name}</p>
            {person.role && (
              <p className="text-xs text-text-muted mt-0.5">{person.role}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
