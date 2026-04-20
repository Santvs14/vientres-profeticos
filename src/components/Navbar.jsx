import { Link, useLocation } from "react-router-dom"
import LiveIndicator from "./LiveIndicator"

export default function Navbar() {
  const location = useLocation()

  return (
    <>
      <LiveIndicator />

      <nav className="navbar-pro">
        
        {/* 🔥 LOGO PRO */}
        <div className="logo-container">
          <img 
            src="https://vgcjpjqogscntrtfdgsv.supabase.co/storage/v1/object/public/LogoVientresProfeticos/PHOTO-2026-03-21-17-57-36.jpg" 
            alt="Logo Ministerio"
            className="logo-img"
          />

          <span className="logo-text">
            Vientres Proféticos
          </span>
        </div>

        <div className="nav-links">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Inicio</Link>
          <Link className={location.pathname === "/sobre" ? "active" : ""} to="/sobre">Sobre</Link>
          <Link className={location.pathname === "/mensajes" ? "active" : ""} to="/mensajes">Palabra</Link>
          <Link className={location.pathname === "/testimonios" ? "active" : ""} to="/testimonios">Testimonios</Link>
          <Link className={location.pathname === "/comunidad" ? "active" : ""} to="/comunidad">Comunidad</Link>
          <Link className="btn-nav" to="/envivo">En Vivo</Link>
        </div>

      </nav>
    </>
  )
}