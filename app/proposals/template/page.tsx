import { Cover } from "./sections/Cover"
import { ChiSiamoRivon } from "./sections/ChiSiamoRivon"
import { ChiSiamo } from "./sections/ChiSiamo"
import { QuelloCheSiamoVisto } from "./sections/QuelloCheSiamoVisto"
import { LaGrandeDomanda } from "./sections/LaGrandeDomanda"
import { ComeLavoriamo } from "./sections/ComeLavoriamo"
import { PersonePrimaDiBrand } from "./sections/PersonePrimaDiBrand"
import { ClientiLoghi } from "./sections/ClientiLoghi"
import { UnPartner } from "./sections/UnPartner"
import { ScenarioA } from "./sections/ScenarioA"
import { ScenarioB } from "./sections/ScenarioB"
import { ProssimiPassi } from "./sections/ProssimiPassi"

export const metadata = {
  title: "Proposta — Template",
  robots: { index: false, follow: false },
}

export default function TemplateProposal() {
  return (
    <>
      <style>{`
        html, body { height: 100%; overflow: hidden; margin: 0; }
        @media print {
          @page { margin: 0; size: A4 landscape; }
          *, *::before, *::after { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body { height: auto; overflow: visible; }
          main { height: auto; overflow: visible; scroll-snap-type: none !important; }
          section { break-after: page; page-break-after: always; height: 100vh; min-height: 100vh; overflow: hidden; }
        }
      `}</style>

      <main
        className="h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Cover />
        <ChiSiamoRivon />
        <ChiSiamo />
        <QuelloCheSiamoVisto />
        <LaGrandeDomanda />
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
