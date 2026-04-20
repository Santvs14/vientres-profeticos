import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function Eventos() {
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    getEventos()
  }, [])

  const getEventos = async () => {
    const { data } = await supabase
      .from("eventos")
      .select("*")

    setEventos(data)
  }

  return (
    <div>
      <h2>Próximos Eventos</h2>

      {eventos.map(e => (
        <div key={e.id}>
          <h3>{e.titulo}</h3>
          <p>{e.descripcion}</p>
          <small>{e.fecha}</small>
        </div>
      ))}
    </div>
  )
}