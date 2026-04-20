import { useEffect } from "react"

export default function ScrollReveal({ children }) {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    })

    elements.forEach(el => observer.observe(el))
  }, [])

  return <div className="reveal">{children}</div>
}