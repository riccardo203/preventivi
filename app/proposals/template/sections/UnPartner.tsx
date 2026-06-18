"use client"

import { useRef, useEffect, useState } from "react"
import { flushSync } from "react-dom"
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
  const itemsColRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const logoRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    const computeLines = (): Line[] => {
      const section = sectionRef.current
      const logoEl = logoRef.current
      const itemsCol = itemsColRef.current
      if (!section || !logoEl || !itemsCol) return []

      const sr = section.getBoundingClientRect()
      const lr = logoEl.getBoundingClientRect()
      const cr = itemsCol.getBoundingClientRect()

      const x2 = ((lr.left - sr.left - 30) / sr.width) * 100
      const y2 = ((lr.top + lr.height / 2 - sr.top) / sr.height) * 100

      // Calculate item y-positions mathematically from the container rather than
      // measuring each item individually — text reflow in print would shift individual
      // item rects, but the container bounds are stable across screen and print.
      const N = ITEMS.length
      return ITEMS.map((_, i) => {
        // y1: calculated from container — stable across screen and print regardless of text reflow
        const itemCenterY = cr.top + (i / (N - 1)) * cr.height
        // x1: measured from each item's right edge — gives the staggered line-start effect
        const itemEl = itemRefs.current[i]
        const x1px = itemEl ? itemEl.getBoundingClientRect().right : cr.right
        return {
          x1: ((x1px - sr.left + 4) / sr.width) * 100,
          y1: ((itemCenterY - sr.top) / sr.height) * 100,
          x2,
          y2,
        }
      })
    }

    const update = () => setLines(computeLines())
    const updateSync = () => flushSync(() => setLines(computeLines()))

    const mql = window.matchMedia("print")
    const handlePrintChange = () => updateSync()

    update()
    window.addEventListener("resize", update)
    mql.addEventListener("change", handlePrintChange)

    return () => {
      window.removeEventListener("resize", update)
      mql.removeEventListener("change", handlePrintChange)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-white relative overflow-hidden flex flex-col px-16 pt-16 pb-12"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
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
              vectorEffect="non-scaling-stroke"
            />
          )
        })}
      </svg>

      <div className="relative flex flex-col flex-1 min-h-0" style={{ zIndex: 2 }}>
        <p className="label-section mb-3">Il nostro approccio</p>
        <h2 className="heading-display mb-8">Non un progetto. Un partner di crescita</h2>

        <div className="flex flex-1 min-h-0">
          <div ref={itemsColRef} className="w-1/2 flex flex-col justify-between overflow-hidden py-1">
            {ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-xs mt-0.5 flex-shrink-0 text-text-secondary">—</span>
                <p ref={(el) => { itemRefs.current[i] = el }} className="text-xs leading-snug text-text-primary inline">{item}</p>
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
