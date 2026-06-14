const supportedLngs = ['en', 'es']
const nameLngStorageKey = 'isdev-ui-lng'

// Get the language prefix from the URL path, if present.
function getLangFromPath() {
  if (typeof window === 'undefined') return null
  const segs = window.location.pathname.split('/').filter(Boolean)
  return segs.length ? segs[0] : null
}

// Determine the language to use based on URL, localStorage, and browser settings.
function chooseLanguage() {
  const pathLang = getLangFromPath()
  if (pathLang && supportedLngs.includes(pathLang)) return pathLang

  if (typeof localStorage !== 'undefined') {
    const storedLng = localStorage.getItem(nameLngStorageKey)
    if (storedLng && supportedLngs.includes(storedLng)) return storedLng
  }

  if (typeof navigator !== 'undefined' && navigator.language) {
    const nav = navigator.language.split('-')[0]
    if (supportedLngs.includes(nav)) return nav
  }

  return 'en'
}

const detectedLng = chooseLanguage()

// Update the URL to include the selected language prefix.
function updateUrlWithLang(lang: string) {
  localStorage.setItem(nameLngStorageKey, lang)

  const pathLang = getLangFromPath()
  if (pathLang === lang) return
  if (pathLang && supportedLngs.includes(pathLang)) {
    const newPath = window.location.pathname.replace(`/${pathLang}`, `/${lang}`)
    window.history.replaceState(
      null,
      '',
      newPath + window.location.search + window.location.hash
    )
  } else {
    const newPath = `/${lang}${window.location.pathname}`
    window.history.replaceState(
      null,
      '',
      newPath + window.location.search + window.location.hash
    )
  }
}

// On initial load, ensure the URL has the correct language prefix.
if (typeof window !== 'undefined') {
  const firstSeg = getLangFromPath()
  if (!firstSeg || !supportedLngs.includes(firstSeg)) {
    const currentPath = window.location.pathname
    const newPath = `/${detectedLng}${currentPath === '/' ? '' : currentPath}`
    if (
      !window.location.pathname.startsWith(`/${detectedLng}/`) &&
      window.location.pathname !== `/${detectedLng}`
    ) {
      window.history.replaceState(
        null,
        '',
        newPath + window.location.search + window.location.hash
      )
    }
  }
}

export { detectedLng, supportedLngs, updateUrlWithLang }
