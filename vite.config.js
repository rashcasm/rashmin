import { readFile, writeFile } from 'node:fs/promises'
import { createServer, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const SITE = 'https://www.rashmin.tech'

// replace exactly one known string, and fail the build loudly if index.html drifted
const swap = (html, from, to) => {
  if (!html.includes(from)) throw new Error(`prerender: "${from.slice(0, 60)}" not found in index.html`)
  return html.replace(from, to)
}

const notesPage = (html, notes) => {
  const title = 'Notes · Rashmin Chaudhari'
  const desc =
    'Rashmin Chaudhari’s notes on AI agents, forward-deployed engineers (FDEs), AI-native businesses, and building in the foothills of the singularity.'
  const author = { '@type': 'Person', name: 'Rashmin Chaudhari', url: `${SITE}/` }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: title,
    url: `${SITE}/notes`,
    author,
    blogPost: notes.map((n) => ({
      '@type': 'BlogPosting',
      headline: n.title,
      datePublished: n.date,
      url: `${SITE}/notes#${n.id}`,
      author,
    })),
  }
  html = swap(html, '<title>Rashmin Chaudhari · Chief of Staff, eigi.ai</title>', `<title>${title}</title>`)
  html = swap(html, '<meta property="og:title" content="Rashmin Chaudhari · Chief of Staff, eigi.ai" />', `<meta property="og:title" content="${title}" />`)
  html = html.replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*"/g, `$1${desc}"`)
  html = swap(html, `<link rel="canonical" href="${SITE}/" />`, `<link rel="canonical" href="${SITE}/notes" />`)
  html = swap(html, `<meta property="og:url" content="${SITE}/" />`, `<meta property="og:url" content="${SITE}/notes" />`)
  html = swap(html, '<meta property="og:type" content="profile" />', '<meta property="og:type" content="website" />')
  return swap(html, '</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`)
}

// After the client build, render each page to HTML and put it inside #root,
// so crawlers that don't run JavaScript (most AI bots) still see all the text.
// dist/index.html is the tabbed home page; dist/notes.html is served at /notes.
function prerender() {
  return {
    name: 'prerender',
    apply: 'build',
    async closeBundle() {
      const server = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        logLevel: 'error',
        // only used for SSR renders; skip the browser dep scan it would otherwise start
        optimizeDeps: { noDiscovery: true, include: [] },
      })
      try {
        const { render, notes } = await server.ssrLoadModule('/src/entry-server.jsx')
        const template = await readFile('dist/index.html', 'utf8')
        const root = (page) => `<div id="root">${render(page)}</div>`
        const empty = '<div id="root"></div>'
        await writeFile('dist/index.html', swap(template, empty, root('home')))
        await writeFile('dist/notes.html', swap(notesPage(template, notes), empty, root('notes')))
      } finally {
        await server.close()
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerender()],
  define: {
    'import.meta.env.BUILD_DATE': JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
})
