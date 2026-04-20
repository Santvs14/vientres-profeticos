import ScrollReveal from "../components/ScrollReveal"

export default function Sobre() {
  return (
    <div className="home">
      <ScrollReveal>
        <div className="card">
          <h2>Visión</h2>
          <p>
            Metamorfosis espiritual para mujeres heridas, sin identidad y sin fe,
            llevándolas a manifestar el diseño de Dios.
          </p>
        </div>

        <div className="card">
          <h2>Misión</h2>
          <p>
            Alcanzar una generación con palabra profética,
            llevando sanidad, liberación y salvación.
          </p>
        </div>
      </ScrollReveal>
    </div>
  )
}