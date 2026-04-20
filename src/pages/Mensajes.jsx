import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function Mensajes() {
  const [mensajes, setMensajes] = useState([])

  useEffect(() => {
    obtenerMensajes()
  }, [])

  const obtenerMensajes = async () => {
    const { data } = await supabase
      .from("mensajes")
      .select("*")
      .order("fecha", { ascending: false })

    setMensajes(data)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        📖 Palabra Profética
      </h2>

      {mensajes.map(m => (
       <div key={m.id} className="card">
  <h3>{m.titulo}</h3>
  <p>{m.contenido}</p>
   <small className="text-gray-500">
            {new Date(m.fecha).toLocaleString()}
          </small>
</div>
         
        
      ))}
    </div>
  )
}