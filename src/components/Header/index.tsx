import * as Element from './styles'
import Logo from '../../assets/Logo.png'

export function Header() {
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