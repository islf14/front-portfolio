import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Home from './app/Home'
import Resume from './app/Resume'
import Contact from './app/Contact'
import LayoutMain from './app/LayoutMain'
import { themeNameStorageKey, ThemeProvider } from './components/theme-provider'
import { detectedLng } from './components/language-prefix'

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey={themeNameStorageKey}>
        <Router basename={`/${detectedLng}`}>
          <Routes>
            <Route path="/" element={<LayoutMain />}>
              <Route index element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}
