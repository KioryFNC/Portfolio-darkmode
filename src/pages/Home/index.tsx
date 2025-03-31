import * as Element from './styles'

import { Header } from '../../components/Header'
import { ProjectCard } from '../../components/ProjectCard.tsx'
import { ContactCard } from '../../components/ContactCard/index.tsx'

import Myself from '../../assets/Myself.jpg'
import Code from '../../assets/Code.png'
import React from '../../assets/React.svg'
import typescript from '../../assets/typescript.svg'
import javaScript from '../../assets/JavaScript.svg'
import Github from '../../assets/GitHub.svg'
import HTML from '../../assets/HTML.svg'
import CSS from '../../assets/CSS.svg'

import CoffeeDelivery from '../../assets/Projects/CoffeeDelivery.png'
import GTA from '../../assets/Projects/GTA.png'
import FoodExplorer from '../../assets/Projects/FoodExplorer.png'
import Zingen from '../../assets/Projects/zingen.png'
import Timer from '../../assets/Projects/Timer.png'
import ToDo from '../../assets/Projects/ToDo.png'

import LinkedinLogo from '../../assets/Contact/LinkedinLogo.png'
import GithubLogo from '../../assets/Contact/GithubLogo.png'
import EmailLogo from '../../assets/Contact/EnvelopeSimple.png'

import { motion } from 'framer-motion'

export function Home() {
  return (
    <Element.Root>
      <Element.ContentHeader>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}      
        whileInView={{ opacity: 1, y: 0 }}      
        transition={{ duration: 0.8 }}      
        viewport={{ once: true }}      
      >
        <Element.MySelf>
          <div>
            <img src={Myself} alt="" />
            <img src={Code} alt="" />
          </div>
          <span>Hello World! Meu nome é <strong>Yuri</strong> e sou</span>
          <h2>Desenvolvedor Front end</h2>
          <p>Apaixonado por Front end e estudando cada dia mais, dedicado a criar aplicativos e site que sejam responsiveis, elegantes e fáceis de usar.</p>
        </Element.MySelf>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
            {[
              { img: React, name: 'React'},
              { img: typescript, name: 'Typescript'},
              { img: javaScript, name: 'JavaScript'},
              { img: Github, name: 'Github'},
              { img: HTML, name: 'HTML'},
              { img: CSS, name: 'CSS'}
            ].map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, x: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <img src={skill.img} /> {skill.name}
              </motion.span>
            ))}
          </Element.Skills>
        </Element.About>
      </motion.div>
      </Element.ContentHeader>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Element.MyProjects>
          <div>
            <h3>Meu <span>trabalho</span></h3>
            <h4>Veja os projetos em destaque</h4>
          </div>
          <Element.Project>
          {[
            { image: CoffeeDelivery, 
              title: 'CoffeeDelivery', 
              description: 'Coffee Delivery é uma página web de catálogo e compra de cafés.', 
              siteLink: 'https://coffee-delivery-nu-liard.vercel.app/', 
              codeLink: 'https://github.com/KioryFNC/coffeeDelivery' 
            },
            { image: ToDo, 
              title: 'ToDo-List', 
              description: 'Página web para criação e controle de tarefas.', 
              siteLink: 'https://todo-list-lilac-phi.vercel.app/', 
              codeLink: 'https://github.com/KioryFNC/todoList' 
            },
            { image: Zingen, 
              title: 'Zingen', 
              description: 'Landing Page de marketing completa e responsiva de um aplicativo de Karaokê chamado Zingen.', 
              siteLink: 'https://zingen-responsive.vercel.app/', 
              codeLink: 'https://github.com/KioryFNC/zingenResponsive' 
            },
            { image: Timer, 
              title: 'Timer', 
              description: 'Projeto onde coloca um Timer que pode ser interrompido durante o processo, acabar com o tempo ou em processo. e uma pagina de historico com os detalhes.', 
              siteLink: 'https://timer-ig-three.vercel.app/', 
              codeLink: 'https://github.com/KioryFNC/IgniteTimer' 
            },
            { image: GTA, 
              title: 'GTA FiveM', 
              description: 'Aplicação onde tem lista de players e pode adicionar um novo play, procurar, excluir ou mudar sua hierarquia de cargo.', 
              siteLink: 'https://five-m-six.vercel.app/', 
              codeLink: 'https://github.com/KioryFNC/stydyingFiveM' 
            },
            { image: FoodExplorer, 
              title: 'FoodExplorer', 
              description: 'Projeto que fiz na metade de 2024, mas não completei o projeto porque foquei em outros, mas deixei responsivo.', 
              siteLink: 'https://food-explorer-front-refactored.vercel.app/', 
              codeLink: 'https://github.com/KioryFNC/foodExplorerFrontRefactored' 
            },
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
          ))
        }
          </Element.Project>
        </Element.MyProjects>
      </motion.div>
      
        <Element.Contact>
          <motion.div
            className='informations'
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <h3>Contato</h3>
            <h4>Vamos trabalhar juntos?</h4>
            <span>Entre em contato comigo ou acompanhe as minhas redes sociais!</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Element.ContactCards>
              {[
                { image: GithubLogo, title: 'Github', link: 'https://github.com/KioryFNC'},
                { image: LinkedinLogo, title: 'Linkedin', link: 'https://www.linkedin.com/in/yuri-barros-luz-014010258/'},
                { image: EmailLogo, title: 'E-mail', link: 'mailto:yuri.barros.luz.familia@gmail.com'},
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ width: "100%", display: "flex", justifyContent: "center" }}
                >
                  <ContactCard {...contact} />
                </motion.div>
              ))}
            </Element.ContactCards>
          </motion.div>
        </Element.Contact>
    </Element.Root>
  )
}