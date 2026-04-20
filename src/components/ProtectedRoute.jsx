import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })
  }, [])

  if (loading) return <p>Cargando...</p>

  if (!user) return <Navigate to="/login" />

  return children
}