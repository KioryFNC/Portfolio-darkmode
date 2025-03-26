import * as Element from './styles'
import Logo from '../../assets/Logo.png'
import { useEffect } from 'react'

export function Header() {
  useEffect(() => {
    const handleSmoothScroll = (event: Event) => {
      const target = event.target as HTMLAnchorElement
      if (target.tagName === "A" && target.hash) {
        event.preventDefault()
        const section = document.querySelector(target.hash)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <Element.Root>
      <img src={Logo} alt="" />
      <nav>
        <a href="#about">Sobre mim</a>
        <a href="#Project">Projetos</a>
        <a href="#Contact">Contato</a>
      </nav>
    </Element.Root>
  )
}