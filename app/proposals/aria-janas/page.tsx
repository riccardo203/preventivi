import { Cover } from "./sections/Cover"
import { ChiSiamo } from "./sections/ChiSiamo"
import { QuelloCheSiamoVisto } from "./sections/QuelloCheSiamoVisto"
import { ComeLavoriamo } from "./sections/ComeLavoriamo"
import { IlNostroLavoro } from "./sections/IlNostroLavoro"
import { UnPartner } from "./sections/UnPartner"
import { ScenarioA } from "./sections/ScenarioA"
import { ProssimiPassi } from "./sections/ProssimiPassi"

export const metadata = {
  title: "Proposta — Aria · Janas",
  robots: { index: false, follow: false },
}

export default function AriaJanasProposal() {
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
        <IlNostroLavoro />
        <UnPartner />
        <ScenarioA />
        <ProssimiPassi />
      </main>
    </>
  )
}
