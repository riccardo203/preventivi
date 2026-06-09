"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const ITEMS = [
  "Migliore costruzione di offerte commerciali specifiche",
  "Funnel più strutturati per trasformare attenzione in vendite",
  "Migliore conversione da interesse a vendita",
  "Più velocità nel lanciare nuove idee e promozioni",
  "Meno dipendenza dal passaparola",
  "Supporto nelle decisioni commerciali",
  "Capacità di replicare ciò che funziona su più sedi",
  "Riduzione del carico interno sul team",
  "Meno errori dovuti a gestione frammentata",
  "Storico dati utile per decisioni future",
  "Partner che conosce davvero il business nel tempo",
  "Marketing che diventa un asset, non una spesa occasionale",
  "Accumulo progressivo di conoscenza tra una campagna e l'altra",
  "Promozioni sostenibili, senza svalutare il brand",
  "Intuizioni del titolare trasformate in azioni misurabili",
  "Identificazione rapida dei colli di bottiglia nelle vendite",
  "Migliore gestione dei lanci di nuove sedi o servizi",
  "Priorità più chiare: cosa fare, cosa rimandare, cosa evitare",
  "Sistemi ripetibili, non iniziative isolate",
  "Vendere meglio, non solo di più",
  "Testare offerte diverse senza stravolgere il business",
  "Capire quali attività meritano più investimento",
]

type Line = { x1: number; y1: number; x2: number; y2: number }

export function UnPartner() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const logoRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      const logoEl = logoRef.current
      if (!section || !logoEl) return

      const sectionRect = section.getBoundingClientRect()
      const logoRect = logoEl.getBoundingClientRect()

      const x2 = logoRect.left - sectionRect.left - 30
      const y2 = logoRect.top + logoRect.height / 2 - sectionRect.top

      const newLines = itemRefs.current
        .map((el) => {
          if (!el) return null
          const rect = el.getBoundingClientRect()
          return {
            x1: rect.right - sectionRect.left + 4,
            y1: rect.top + rect.height / 2 - sectionRect.top,
            x2,
            y2,
          }
        })
        .filter(Boolean) as Line[]

      setLines(newLines)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-white relative overflow-hidden flex flex-col px-16 pt-16 pb-12"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {lines.map((l, i) => {
          const cx1 = l.x1 + (l.x2 - l.x1) * 0.4
          const cx2 = l.x1 + (l.x2 - l.x1) * 0.6
          return (
            <path
              key={i}
              d={`M ${l.x1} ${l.y1} C ${cx1} ${l.y1} ${cx2} ${l.y2} ${l.x2} ${l.y2}`}
              fill="none"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="1.5"
            />
          )
        })}
      </svg>

      <div className="relative flex flex-col flex-1 min-h-0" style={{ zIndex: 2 }}>
        <p className="label-section mb-3">Il nostro approccio</p>
        <h2 className="heading-display mb-8">Non un progetto. Un partner di crescita</h2>

        <div className="flex flex-1 min-h-0">
          <div className="w-1/2 flex flex-col justify-between overflow-hidden py-1">
            {ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-xs mt-0.5 flex-shrink-0 text-text-secondary">—</span>
                <p
                  ref={(el) => { itemRefs.current[i] = el }}
                  className="text-xs leading-snug text-text-primary inline"
                >{item}</p>
              </div>
            ))}
          </div>

          <div className="w-1/2 flex items-center justify-end pr-16">
            <div ref={logoRef}>
              <Image src="/omira-logo-new.png" alt="Omira" width={180} height={60} className="brightness-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
