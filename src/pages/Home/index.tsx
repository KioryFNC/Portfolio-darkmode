import { Header } from '../../components/Header'
import * as Element from './styles'
import Myself from '../../assets/Myself.jpg'
import Code from '../../assets/Code.png'
import React from '../../assets/React.svg'
import typescript from '../../assets/typescript.svg'
import javaScript from '../../assets/javaScript.svg'
import Github from '../../assets/Github.svg'
import HTML from '../../assets/HTML.svg'
import CSS from '../../assets/CSS.svg'


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
        <h3>Sobre mim</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga esse omnis odio explicabo rem ut doloremque, incidunt voluptatem nesciunt! Aut molestiae qui ad neque odio officiis maiores natus quia porro.</p>
        <Element.Skills>
        <span><img src={React}/> React</span>
        <span><img src={typescript}/> Typescript</span>
        <span><img src={javaScript}/> Javascript</span>
        <span><img src={Github}/> Github</span>
        <span><img src={HTML}/> HTML</span>
        <span><img src={CSS}/> CSS</span>
        </Element.Skills>
      </Element.About>
      
    </Element.Root>
  )
}