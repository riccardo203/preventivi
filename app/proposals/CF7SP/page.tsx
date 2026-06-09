import { Cover } from "./sections/Cover"
import { ChiSiamo } from "./sections/ChiSiamo"
import { QuelloCheSiamoVisto } from "./sections/QuelloCheSiamoVisto"
import { ComeLavoriamo } from "./sections/ComeLavoriamo"
import { PersonePrimaDiBrand } from "./sections/PersonePrimaDiBrand"
import { ClientiLoghi } from "./sections/ClientiLoghi"
import { UnPartner } from "./sections/UnPartner"
import { ScenarioA } from "./sections/ScenarioA"
import { ScenarioB } from "./sections/ScenarioB"
import { ProssimiPassi } from "./sections/ProssimiPassi"

export const metadata = {
  title: "Proposta — Omira",
  robots: { index: false, follow: false },
}

export default function CF7SPProposal() {
  return (
    <>
      <style>{`
        html, body { height: 100%; overflow: hidden; margin: 0; }
        @media print { html, body { height: auto; overflow: visible; } main { height: auto; overflow: visible; scroll-snap-type: none; } section { page-break-after: always; height: 100vh; } }
      `}</style>

      <main
        className="h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Cover />
        <ChiSiamo />
        <QuelloCheSiamoVisto />
        <ComeLavoriamo />
        <ClientiLoghi />
        <PersonePrimaDiBrand />
        <UnPartner />
        <ScenarioA />
        <ScenarioB />
        <ProssimiPassi />
      </main>
    </>
  )
}
