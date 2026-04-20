import { useState } from "react"
import { supabase } from "../services/supabase"

export default function AdminDashboard() {
  // MENSAJES
  const [titulo, setTitulo] = useState("")
  const [contenido, setContenido] = useState("")

  // EVENTOS
  const [eventoTitulo, setEventoTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")

  // TESTIMONIOS
  const [nombre, setNombre] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [video, setVideo] = useState(null)

  // 🔹 CREAR MENSAJE
  const crearMensaje = async () => {
    await supabase.from("mensajes").insert([
      { titulo, contenido }
    ])

    alert("Mensaje publicado")
  }

  // 🔹 CREAR EVENTO
  const crearEvento = async () => {
    await supabase.from("eventos").insert([
      {
        titulo: eventoTitulo,
        descripcion
      }
    ])

    alert("Evento creado")
  }

  // 🔹 SUBIR VIDEO
  const subirVideo = async () => {
    if (!video) return

    const { data } = await supabase.storage
      .from("videos")
      .upload(`public/${video.name}`, video)

    const url = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/videos/public/${video.name}`

    await supabase.from("testimonios").insert([
      {
        nombre,
        mensaje,
        video_url: url
      }
    ])

    alert("Testimonio subido")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Panel de Administración
      </h1>

      {/* MENSAJES */}
      <div className="mb-6">
        <h2 className="font-bold">Crear Mensaje</h2>
        <input placeholder="Título"
          onChange={e => setTitulo(e.target.value)} />
        <textarea placeholder="Contenido"
          onChange={e => setContenido(e.target.value)} />
        <button onClick={crearMensaje}>Publicar</button>
      </div>

      {/* EVENTOS */}
      <div className="mb-6">
        <h2 className="font-bold">Crear Evento</h2>
        <input placeholder="Título"
          onChange={e => setEventoTitulo(e.target.value)} />
        <textarea placeholder="Descripción"
          onChange={e => setDescripcion(e.target.value)} />
        <button onClick={crearEvento}>Crear</button>
      </div>

      {/* TESTIMONIOS */}
      <div>
        <h2 className="font-bold">Subir Testimonio</h2>
        <input placeholder="Nombre"
          onChange={e => setNombre(e.target.value)} />
        <textarea placeholder="Mensaje"
          onChange={e => setMensaje(e.target.value)} />
        <input type="file"
          onChange={e => setVideo(e.target.files[0])} />
        <button onClick={subirVideo}>Subir</button>
      </div>
    </div>
  )
}