import Image from "next/image"

// Diagramma "Persone prima di Brand": frase centrale da cui si diramano
// linee tratteggiate curve verso ogni cliente (foto 1:1, nome, brand).

type Person = {
  id: string
  name: string
  brand: string
  photo: string
  // posizione del nodo in percentuale della sezione
  x: number
  y: number
}

// Sorgente delle linee (centro, appena sotto la frase)
const SOURCE = { x: 50, y: 54 }

const PEOPLE: Person[] = [
  { id: "p1", name: "Mauro Moi", brand: "Foodora", photo: "/people/mauro-moi.png", x: 11, y: 19 },
  { id: "p2", name: "Cristina Schirru", brand: "Solisera", photo: "/people/cristina-schirru.png", x: 31, y: 18 },
  { id: "p3", name: "Giuseppe Manca", brand: "Credipass", photo: "/people/giuseppe-manca.png", x: 9, y: 55 },
  { id: "p4", name: "Andrea Cartamantiglia", brand: "Inkiostro", photo: "/people/andrea-cartamantiglia.png", x: 25, y: 84 },
  { id: "p5", name: "Fabrizio Mascia", brand: "Autostyle", photo: "/people/fabrizio-mascia.png", x: 70, y: 18 },
  { id: "p6", name: "Matteo Cuscusa", brand: "Transumanza", photo: "/people/matteo-cuscusa.png", x: 91, y: 33 },
  { id: "p7", name: "Marta Susnik", brand: "Studio Dentistico Susnik", photo: "/people/marta-susnik.png", x: 82, y: 81 },
  { id: "p8", name: "Mariano Mascia", brand: "i 4 Mori", photo: "/people/mariano-mascia.png", x: 56, y: 87 },
]

export function PersonePrimaDiBrand() {
  return (
    <section
      className="h-screen relative overflow-hidden bg-white"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      {/* Linee tratteggiate curve (sotto al contenuto) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {PEOPLE.map((p) => (
          <path
            key={p.id}
            d={`M ${SOURCE.x} ${SOURCE.y} Q ${p.x} ${SOURCE.y} ${p.x} ${p.y}`}
            fill="none"
            stroke="#c9c9d1"
            strokeWidth={1}
            strokeDasharray="4 5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <circle cx={SOURCE.x} cy={SOURCE.y} r={1} fill="#9a9aa6" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Frase centrale */}
      <div
        className="absolute z-10 text-center"
        style={{ left: "50%", top: "42%", transform: "translate(-50%, -50%)" }}
      >
        <p className="label-section mb-4">Il nostro approccio</p>
        <h2 className="heading-display max-w-md mx-auto">
          Persone prima<br />di Brand
        </h2>
      </div>

      {/* Nodi clienti */}
      {PEOPLE.map((p) => (
        <div
          key={p.id}
          className="absolute z-10 flex flex-col items-center text-center"
          style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
        >
          {/* Foto 1:1 con angoli stondati — ritaglio dall'alto (tiene la testa) */}
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden mb-2.5 shadow-sm bg-neutral-200">
            <Image
              src={p.photo}
              alt={`${p.name} — ${p.brand}`}
              fill
              sizes="128px"
              className="object-cover object-top"
            />
          </div>
          <p className="text-sm font-semibold text-text-primary leading-tight">{p.name}</p>
          <p className="text-xs text-text-muted mt-0.5">{p.brand}</p>
        </div>
      ))}
    </section>
  )
}
