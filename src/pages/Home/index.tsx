import { Header } from '../../components/Header'
import { ProjectCard } from '../../components/ProjectCard.tsx'

import * as Element from './styles'

import Myself from '../../assets/Myself.jpg'
import Code from '../../assets/Code.png'
import React from '../../assets/React.svg'
import typescript from '../../assets/typescript.svg'
import javaScript from '../../assets/javaScript.svg'
import Github from '../../assets/Github.svg'
import HTML from '../../assets/HTML.svg'
import CSS from '../../assets/CSS.svg'
import CoffeeDelivery from '../../assets/Projects/CoffeeDelivery.png'




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
        <p>
          Apaixonado por tecnologia e aprendizado contínuo, estou desenvolvendo minha carreira em Desenvolvimento Web Front-End, com foco em JavaScript, TypeScript e React. Tenho experiência com styled-components, Clean Code e Componentização, criando interfaces modernas, responsivas e eficientes.
          <br /> <br />
          Além disso, tenho conhecimento em Git/GitHub para controle de versão e colaboração em projetos. Atualmente, continuo aprimorando minhas habilidades como dev estudando diariamente e em Inglês atualmente cursando Nivel intermediario na Cultura Inglesa, ampliando minha capacidade de comunicação no ambiente global de tecnologia.
          <br /> <br />
          Sou um Profissional dedicado, com experiência em gestão de estoque, vendas online e suporte administrativo. Possuo habilidades em organização, comunicação eficaz e trabalho em equipe, sempre buscando aprimorar processos e otimizar resultados.
          <br /> <br />
          Sempre em busca de novos desafios, estou comprometido em evoluir como desenvolvedor e contribuir positivamente para projetos inovadores.
        </p>
        <Element.Skills>
        <span><img src={React}/> React</span>
        <span><img src={typescript}/> Typescript</span>
        <span><img src={javaScript}/> Javascript</span>
        <span><img src={Github}/> Github</span>
        <span><img src={HTML}/> HTML</span>
        <span><img src={CSS}/> CSS</span>
        </Element.Skills>
      </Element.About>

      <Element.MyProjects>
        <h2>Meu <span>trabalho</span></h2>
        <h3>Veja os projetos em destaque</h3>
        <div className="Projects">
          <ProjectCard 
            image={CoffeeDelivery}
            title='CoffeeDelivery'
            description='Coffee Delivery é uma página web de catálogo e compra de cafés.'
            siteLink='https://coffee-delivery-nu-liard.vercel.app/'
            codeLink='https://github.com/KioryFNC/coffeeDelivery'
          />
          <ProjectCard 
            image={CoffeeDelivery}
            title='CoffeeDelivery'
            description='Coffee Delivery é uma página web de catálogo e compra de cafés.'
            siteLink='https://coffee-delivery-nu-liard.vercel.app/'
            codeLink='https://github.com/KioryFNC/coffeeDelivery'
          />
          <ProjectCard 
            image={CoffeeDelivery}
            title='CoffeeDelivery'
            description='Coffee Delivery é uma página web de catálogo e compra de cafés.'
            siteLink='https://coffee-delivery-nu-liard.vercel.app/'
            codeLink='https://github.com/KioryFNC/coffeeDelivery'
          />
        </div>
      </Element.MyProjects>

    </Element.Root>
  )
}