import { Header } from '../../components/Header'
import * as Element from './styles'
import Myself from '../../assets/Myself.jpg'
import Code from '../../assets/Code.png'

export function Home() {
  return (
    <Element.Root>
      <Header />
      <Element.MySelf>
        <div>
          <img src={Myself} alt="" />
          <img src={Code} alt="" />
        </div>
        <span>Hello World! Meu nome é <strong>Yuri</strong> e sou</span>
        <h2>Desenvolvedor Front end</h2>
        <p>Apaixonado por Front end e estudando cada dia mais, dedicado a criar aplicativos e site que sejam responsiveis, elegantes e fáceis de usar.</p>
      </Element.MySelf>
      <Element.About>
        <a href="#about">Sobre mim</a>
      </Element.About>
    </Element.Root>
  )
}