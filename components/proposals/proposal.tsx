import Image from "next/image"
import { Check, Globe } from "lucide-react"

const CARD_TINTS = {
  blue: "linear-gradient(180deg, #ddd5ed 0%, #c8d5e8 100%)",
  pink: "linear-gradient(180deg, #f3d9d0 0%, #e9c2b6 100%)",
  amber: "linear-gradient(180deg, #f1d9bd 0%, #e3c39d 100%)",
} as const

export type ProposalTier = {
  name: string
  price: string
  tagline: string
  priceBreakdown?: string
  originalPrice?: string
  pricePeriod?: string
  durationOverride?: string
  features: string[]
  tint: keyof typeof CARD_TINTS
}

export type WebsiteFeature = {
  variant: "bonus" | "paid"
  title: string
  badge: string
  badgeNote?: string
}

export type ProposalProps = {
  duration: string
  title: string
  subtitle: string
  tiers: ProposalTier[]
  clientLogoSrc?: string
  clientLogoAlt?: string
  websiteFeature?: WebsiteFeature
}

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2 w-[68%]",
  3: "grid-cols-3 w-[90%]",
}

export function Proposal({
  duration,
  title,
  subtitle,
  tiers,
  clientLogoSrc,
  clientLogoAlt,
  websiteFeature,
}: ProposalProps) {
  return (
    <article
      className="proposal-page relative mx-auto overflow-hidden bg-black"
      style={{ width: "297mm", height: "210mm" }}
    >
      <Image
        src="/proposals/background.png"
        alt=""
        fill
        priority
        sizes="297mm"
        className="object-cover"
      />

      <div className="relative z-10 flex h-full flex-col px-14 pt-12 pb-10">
        <header className="text-center text-white">
          <h1 className="text-5xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-3 text-base text-white/90">{subtitle}</p>
        </header>

        <div
          className={`mx-auto mt-8 grid flex-1 gap-5 ${
            GRID_COLS[tiers.length] ?? "grid-cols-3 w-[90%]"
          }`}
        >
          {tiers.map((tier) => (
            <ProposalCard
              key={tier.name}
              tier={tier}
              duration={duration}
              websiteFeature={websiteFeature}
            />
          ))}
        </div>

        <footer className="mt-8 flex items-center justify-center gap-10">
          <Image
            src="/proposals/omira-logo.png"
            alt="OMIRA by Rivon"
            width={220}
            height={80}
            className="h-14 w-auto object-contain"
          />
          {clientLogoSrc && (
            <Image
              src={clientLogoSrc}
              alt={clientLogoAlt ?? ""}
              width={180}
              height={80}
              className="h-12 w-auto object-contain"
            />
          )}
        </footer>
      </div>
    </article>
  )
}

function ProposalCard({
  tier,
  duration,
  websiteFeature,
}: {
  tier: ProposalTier
  duration: string
  websiteFeature?: WebsiteFeature
}) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
      <div
        className="px-6 pt-6 pb-5"
        style={{ background: CARD_TINTS[tier.tint] }}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-text-primary">
            {tier.name}
          </span>
          <span className="text-sm font-medium text-text-tertiary">
            {tier.durationOverride ?? duration}
          </span>
        </div>

        <div className="mt-6 flex items-baseline gap-2">
          {tier.originalPrice && (
            <span className="text-2xl font-medium text-text-tertiary line-through decoration-2">
              {tier.originalPrice}
            </span>
          )}
          <span className="text-5xl font-semibold tracking-tight text-text-primary">
            {tier.price}
          </span>
          <span className="text-sm text-text-secondary">
            {tier.pricePeriod ?? "/al mese"}
          </span>
        </div>

        <p className="mt-3 text-sm italic text-text-tertiary">
          {tier.tagline}
        </p>
        {tier.priceBreakdown && (
          <p className="mt-1.5 text-[12px] font-medium text-text-secondary">
            {tier.priceBreakdown}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col bg-white">
        {websiteFeature && <WebsiteFeatureRow feature={websiteFeature} />}

        <ul className="flex-1 space-y-2 px-6 py-5">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-[13px] leading-snug text-text-primary"
            >
              <Check
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600"
                strokeWidth={3}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function WebsiteFeatureRow({ feature }: { feature: WebsiteFeature }) {
  const isBonus = feature.variant === "bonus"

  return (
    <div
      className={`flex items-center gap-2.5 border-b px-6 py-3 ${
        isBonus
          ? "border-emerald-100 bg-emerald-50"
          : "border-border-subtle bg-surface-subtle"
      }`}
    >
      <Globe
        className={`h-4 w-4 flex-shrink-0 ${
          isBonus ? "text-emerald-700" : "text-text-tertiary"
        }`}
        strokeWidth={2.5}
      />
      <span
        className={`flex-1 text-[13px] font-semibold leading-tight ${
          isBonus ? "text-emerald-900" : "text-text-primary"
        }`}
      >
        {feature.title}
      </span>
      <div className="flex flex-col items-end gap-0.5">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-[0.12em] ${
            isBonus ? "bg-emerald-600 text-white" : "bg-text-primary text-white"
          }`}
        >
          {feature.badge}
        </span>
        {feature.badgeNote && (
          <span
            className={`text-[11px] font-semibold ${
              isBonus ? "text-emerald-700" : "text-text-secondary"
            }`}
          >
            {feature.badgeNote}
          </span>
        )}
      </div>
    </div>
  )
}
