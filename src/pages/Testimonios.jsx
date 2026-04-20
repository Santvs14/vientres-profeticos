import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function Testimonios() {
  const [testimonios, setTestimonios] = useState([])

  useEffect(() => {
    obtenerTestimonios()
  }, [])

  const obtenerTestimonios = async () => {
    const { data } = await supabase
      .from("testimonios")
      .select("*")

    setTestimonios(data)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        💖 Testimonios
      </h2>

      {testimonios.map(t => (
      <div key={t.id} className="card">
  <h3>{t.nombre}</h3>
  <p>{t.mensaje}</p>

  {t.video_url && (
    <video controls style={{width:"100%", borderRadius:"10px"}}>
      <source src={t.video_url} />
    </video>
  )}
</div>
      ))}
    </div>
  )
}