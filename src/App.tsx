import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './app/Home'
import Resume from './app/Resume'
import Contact from './app/Contact'
import LayoutMain from './app/LayoutMain'
import { ThemeProvider } from './components/theme-provider'

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="IsDev-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<LayoutMain />}>
              <Route index element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}
