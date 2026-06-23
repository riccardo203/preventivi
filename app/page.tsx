import Link from "next/link"

export const metadata = {
  title: "Omira — Preventivi",
}

const proposals = [
  { slug: "template", name: "Template" },
  { slug: "aria-janas", name: "Aria Janas" },
  { slug: "CF7SP", name: "Centro Sportivo Settimo" },
  { slug: "pentagono-village", name: "Pentagono Village" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-light tracking-tight text-neutral-900 mb-2">
          Preventivi
        </h1>
        <p className="text-sm text-neutral-500 mb-8">
          Le proposte realizzate finora.
        </p>

        <ul className="flex flex-col gap-3">
          {proposals.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/proposals/${p.slug}`}
                className="flex items-center justify-between rounded-xl border border-neutral-200 px-5 py-4 text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-50"
              >
                <span className="font-medium">{p.name}</span>
                <span aria-hidden className="text-neutral-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
