export default function LiveSection() {
  return (
    <div className="card">
      <h2>🔴 En Vivo Ahora</h2>

      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/LIVE_ID"
        allowFullScreen
      ></iframe>
    </div>
  )
}