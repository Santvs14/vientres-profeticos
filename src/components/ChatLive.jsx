import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function ChatLive() {
  const [mensajes, setMensajes] = useState([])
  const [nuevoMensaje, setNuevoMensaje] = useState("")

  // Obtener mensajes iniciales
  useEffect(() => {
    getMensajes()

    // Escuchar en tiempo real
    const canal = supabase
      .channel('chat')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chat_mensajes' },
        (payload) => {
          setMensajes(prev => [...prev, payload.new])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(canal)
    }
  }, [])

  const getMensajes = async () => {
    const { data } = await supabase
      .from("chat_mensajes")
      .select("*")
      .order("created_at", { ascending: true })

    setMensajes(data)
  }

  const enviarMensaje = async () => {
    if (!nuevoMensaje) return

    await supabase.from("chat_mensajes").insert([
      {
        usuario: "Anónimo",
        mensaje: nuevoMensaje
      }
    ])

    setNuevoMensaje("")
  }

  return (
    <div className="card">
  <h2>Chat en Vivo 🙏</h2>

  <div style={{height:"200px", overflowY:"auto"}}>
    {mensajes.map((m,i)=>(
      <p key={i}><b>{m.usuario}:</b> {m.mensaje}</p>
    ))}
  </div>

  <input
    value={nuevoMensaje}
    onChange={(e)=>setNuevoMensaje(e.target.value)}
  />

  <button onClick={enviarMensaje}>Enviar</button>
</div>
  )
}