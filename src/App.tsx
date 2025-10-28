import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './app/Home'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
