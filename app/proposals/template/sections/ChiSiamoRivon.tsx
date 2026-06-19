"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { flushSync } from "react-dom"
import { Sparkles } from "lucide-react"

type Line = { x1: number; y1: number; x2: number; y2: number }

export function ChiSiamoRivon() {
  const sectionRef = useRef<HTMLElement>(null)
  const rivonRef = useRef<HTMLDivElement>(null)
  const b1Ref = useRef<HTMLDivElement>(null)
  const b2Ref = useRef<HTMLDivElement>(null)
  const b3Ref = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    const computeLines = (): Line[] => {
      const section = sectionRef.current
      const rivon = rivonRef.current
      const branches = [b1Ref.current, b2Ref.current, b3Ref.current]
      if (!section || !rivon || branches.some((b) => !b)) return []

      const sr = section.getBoundingClientRect()
      const rr = rivon.getBoundingClientRect()
      const x1 = ((rr.left + rr.width / 2 - sr.left) / sr.width) * 100
      const y1 = ((rr.bottom - sr.top + 18) / sr.height) * 100

      return branches.map((el) => {
        const br = el!.getBoundingClientRect()
        return {
          x1, y1,
          x2: ((br.left + br.width / 2 - sr.left) / sr.width) * 100,
          y2: ((br.top - sr.top - 8) / sr.height) * 100,
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
      className="h-screen bg-white relative flex flex-col px-16 pt-16 pb-14"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
        {lines.map((l, i) => (
          <path
            key={i}
            d={`M ${l.x1} ${l.y1} C ${l.x1} ${l.y1 + (l.y2 - l.y1) * 0.55} ${l.x2} ${l.y1 + (l.y2 - l.y1) * 0.45} ${l.x2} ${l.y2}`}
            fill="none"
            stroke="#d4d4d8"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="relative flex flex-col flex-1 min-h-0 justify-between pb-16" style={{ zIndex: 2 }}>
        {/* Slide header */}
        <div>
          <p className="label-section mb-3">Chi siamo</p>
          <h2 className="heading-display">Diversi progetti, tutti by Rivon.</h2>
        </div>

        {/* Rivon node */}
        <div className="flex justify-center">
          <div ref={rivonRef} className="flex flex-col items-center text-center">
            <div className="relative w-48 h-14 mb-4">
              <Image src="/rivon-logo-dark.png" alt="Rivon" fill className="object-contain" />
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-text-secondary">13 collaboratori</p>
              <p className="text-sm text-text-secondary">Clienti e progetti in tutta Europa</p>
              <p className="text-sm text-text-muted max-w-xs">Un ecosistema di competenze digitali, creative e tecnologiche</p>
            </div>
          </div>
        </div>

        {/* Three branches */}
        <div className="grid grid-cols-3 gap-8">
          {/* Omira */}
          <div ref={b1Ref} className="flex flex-col items-center text-center">
            <div className="relative w-36 h-10 mb-4">
              <Image src="/omira-logo-new.png" alt="Omira" fill className="object-contain brightness-0" />
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-text-secondary">Comunicazione, contenuti e advertising</p>
              <p className="text-sm text-text-muted">+45 clienti aiutati</p>
              <p className="text-sm text-text-muted">+100.000€ gestiti in advertising</p>
            </div>
          </div>

          {/* Mobile Apps */}
          <div ref={b2Ref} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              {/* Two stacked app icon cards — replace bg colours with actual app icons when available */}
              <div className="relative flex-shrink-0" style={{ width: 54, height: 54 }}>
                <div className="absolute w-10 h-10 rounded-xl" style={{ background: "#6366F1", top: 0, right: 0, transform: "rotate(10deg)" }} />
                <div className="absolute w-10 h-10 rounded-xl" style={{ background: "#1a1a2e", bottom: 0, left: 0 }} />
              </div>
              <p className="text-base font-semibold text-text-primary">Mobile Apps</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-text-secondary">App mobile sviluppate e lanciate internamente</p>
              <p className="text-sm text-text-muted">+40.000 download nei primi 3 mesi</p>
              <p className="text-sm text-text-muted">+20.000€ generati nei primi 3 mesi</p>
            </div>
          </div>

          {/* AI Implementation */}
          <div ref={b3Ref} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#1a1a2e] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-base font-semibold text-text-primary">AI Implementation</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-text-secondary">Automazioni e sistemi AI per aziende</p>
              <p className="text-sm text-text-muted">Riduzione del lavoro manuale</p>
              <p className="text-sm text-text-muted">Ottimizzazione dei processi operativi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
