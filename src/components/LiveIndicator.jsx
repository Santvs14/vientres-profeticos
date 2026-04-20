import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function LiveIndicator() {
  const [live, setLive] = useState(false)

  useEffect(() => {
    getStatus()

    const canal = supabase
      .channel('live-status')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'live_status' },
        (payload) => {
          setLive(payload.new.activo)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(canal)
    }
  }, [])

  const getStatus = async () => {
    const { data } = await supabase
      .from("live_status")
      .select("*")
      .single()

    setLive(data?.activo)
  }

  return (
    live && (
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center animate-pulse p-2">
        🔴 EN VIVO AHORA - ÚNETE
      </div>
    )
  )
}