import Image from "next/image"

const LOGOS = [
  ...[
    "aura", "mondadori", "cozzeria-marina", "conveco", "fit-freedom",
    "ford-madox", "greek-unique", "sotto-la-torre", "foodora", "taverna-villasimius",
    "solisera", "cleaning-service", "stuzzichiamo", "panifici-bandinu", "la-fontanella",
    "radix", "silhouette-logo", "curry-paradise", "millennium-cagliari", "komos",
    "foodilic", "farinet", "urbansuite", "sct-italia", "octagreen", "i-4-mori",
  ].map((n) => `/client-logos/${n}.png`),
  "/client-logos/aria-ristorante.png",
  "/client-logos/risplende.png",
  "/client-logos/marta-susnik.svg",
  "/client-logos/credipass.png",
  "/client-logos/tomato-blue.png",
  "/client-logos/autostyle.png",
  "/client-logos/locanda-rudalza.png",
  "/client-logos/de-lorenzo.png",
  "/client-logos/inkiostro.png",
  "/client-logos/sardinia-management.png",
  "/client-logos/ile-ramen.png",
]

// Scala per-logo (alcuni file sono ritagliati stretti e risultano troppo grandi)
const SCALE: Record<string, number> = {
  "/client-logos/credipass.png": 0.72,
  "/client-logos/tomato-blue.png": 0.72,
}

// Distribuisce i loghi su N righe statiche bilanciate che riempiono la pagina
function splitRows(arr: string[], n: number): string[][] {
  const rows: string[][] = []
  const base = Math.floor(arr.length / n)
  const extra = arr.length % n
  let i = 0
  for (let r = 0; r < n; r++) {
    const count = base + (r < extra ? 1 : 0)
    rows.push(arr.slice(i, i + count))
    i += count
  }
  return rows
}

const ROWS = splitRows(LOGOS, 5)

function Row({ logos }: { logos: string[] }) {
  return (
    <div className="flex items-center justify-between gap-10">
      {logos.map((src, i) => (
        <div
          key={i}
          className="relative h-14 flex-1"
          style={SCALE[src] ? { transform: `scale(${SCALE[src]})` } : undefined}
        >
          <Image src={src} alt="" fill sizes="180px" className="object-contain" />
        </div>
      ))}
    </div>
  )
}

export function ClientiLoghi() {
  return (
    <section
      className="h-screen bg-white relative overflow-hidden flex flex-col px-16 pt-16 pb-12"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <div className="mb-12">
        <p className="label-section mb-3">I nostri clienti</p>
        <h2 className="heading-display max-w-3xl">Alcune nostre collaborazioni</h2>
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        {ROWS.map((row, i) => (
          <Row key={i} logos={row} />
        ))}
      </div>
    </section>
  )
}
