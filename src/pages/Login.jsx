import { useState } from "react"
import { supabase } from "../services/supabase"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert("Error: " + error.message)
      setLoading(false)
    } else {
      alert("Bienvenido administrador")
      navigate("/admin")
    }
  }

  return (
    <div style={styles.page}>

      {/* Lado izquierdo */}
      <div style={styles.left}>
        <div style={styles.overlay}>
          <h1 style={styles.brandTitle}>Ministerio</h1>
          <h2 style={styles.brandName}>Vientres Proféticos</h2>
          <p style={styles.brandText}>
            Plataforma administrativa para la gestión espiritual y organizativa del ministerio.
          </p>
        </div>
      </div>

      {/* Lado derecho */}
      <div style={styles.right}>
        <div style={styles.card}>

          <h2 style={styles.title}>Bienvenido</h2>
          <p style={styles.subtitle}>Accede a tu panel</p>

          <form onSubmit={handleLogin} style={styles.form}>

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif"
  },

  left: {
    flex: 1,
    background: "linear-gradient(135deg, #1e1b4b, #0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    position: "relative"
  },

  overlay: {
    textAlign: "center",
    padding: "40px",
    maxWidth: "400px"
  },

  brandTitle: {
    fontSize: "20px",
    opacity: 0.7
  },

  brandName: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "15px",
    background: "linear-gradient(135deg, #a78bfa, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  brandText: {
    fontSize: "14px",
    color: "#cbd5f5"
  },

  right: {
    flex: 1,
    background: "#020617",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "350px",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
    color: "#fff"
  },

  title: {
    fontSize: "24px",
    marginBottom: "5px"
  },

  subtitle: {
    fontSize: "13px",
    marginBottom: "25px",
    color: "#94a3b8"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    transition: "0.3s"
  },

  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  }
}