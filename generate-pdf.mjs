import puppeteer from "puppeteer-core"

const BRAVE = "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
const URL = process.env.PDF_URL || "http://localhost:3000/proposals/CF7SP"
const OUT = process.env.PDF_OUT || "Centro-Sportivo-Settimo.pdf"

// 16:9 slide dimensions (each full-screen section -> one PDF page)
const W = 1280
const H = 720

async function autoScroll(page) {
  // Trigger any lazy-loaded images by scrolling the snap container to the bottom
  await page.evaluate(async () => {
    const el = document.querySelector("main") || document.scrollingElement
    const step = 400
    for (let y = 0; y <= el.scrollHeight; y += step) {
      el.scrollTop = y
      await new Promise((r) => setTimeout(r, 60))
    }
    el.scrollTop = 0
  })
}

;(async () => {
  const browser = await puppeteer.launch({
    executablePath: BRAVE,
    headless: "new",
    args: ["--no-sandbox", "--force-color-profile=srgb"],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 })
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 })

  // Force-eager all images and wait for them to finish decoding
  await page.evaluate(() => {
    document.querySelectorAll("img").forEach((img) => {
      img.loading = "eager"
    })
  })
  await autoScroll(page)

  // Neutralize the scroll-snap / overflow:hidden so every section stacks and
  // paginates cleanly at the 720px page boundary.
  await page.addStyleTag({
    content: `
      html, body { height: auto !important; overflow: visible !important; }
      main { height: auto !important; overflow: visible !important; scroll-snap-type: none !important; }
      section { height: ${H}px !important; }
    `,
  })

  // Render the PDF using the on-screen styles (not print media).
  await page.emulateMediaType("screen")
  await page.evaluateHandle("document.fonts.ready")
  await new Promise((r) => setTimeout(r, 500))

  await page.pdf({
    path: OUT,
    width: `${W}px`,
    height: `${H}px`,
    printBackground: true,
    pageRanges: "",
  })

  await browser.close()
  console.log("PDF written to", OUT)
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
