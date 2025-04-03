import * as Element from './styles'
import Logo from '../../assets/Logo.png'
import LogoLight from '../../assets/LogoLight.png'
import { useEffect } from 'react'
import { ThemeButton } from '../ThemeButton'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()

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
      <img src={theme.title === 'light' ? LogoLight : Logo} />
      <div>
        <nav>
          <a href="#about">Sobre mim</a>
          <a href="#project">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
        <ThemeButton />
      </div>
    </Element.Root>
  )
}