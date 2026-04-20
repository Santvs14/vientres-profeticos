import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LiveIndicator from "./components/LiveIndicator"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Comunidad from "./pages/Comunidad"
import Eventos from "./pages/Eventos"
import Mensajes from "./pages/Mensajes"
import Testimonios from "./pages/Testimonios"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Router>
      <LiveIndicator />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/testimonios" element={<Testimonios />} />

        <Route path="/login" element={<Login />} />

        {/* RUTA PROTEGIDA */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App