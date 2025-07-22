import { FaCss3Alt, FaHtml5, FaReact, FaVideo } from "react-icons/fa";
import * as Element from "./styles";
import { SiAdobeaftereffects, SiCanva, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import { SkillCard } from "../SkillCard";

export function SkillsSection() {
  const skills = [
    {
      icon: <FaReact />,
      title: "React",
      description: "Biblioteca moderna para interfaces com foco em componentes",
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      description: "Domínio da base da web e lógica de programação.",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description: "Marcação semântica e acessível para a web.",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description: "Estilização responsiva com Flexbox e Grid.",
    },
    {
      icon: <SiCanva />,
      title: "Canva",
      description: "Designs rápidos para redes sociais e apresentações.",
    },
    {
      icon: <FaVideo />,
      title: "CapCut Pro",
      description: "Edição de vídeos verticais com foco em conteúdo viral.",
    },
    {
      icon: <SiAdobeaftereffects />,
      title: "After Effects",
      description: "Efeitos visuais, intros e animações profissionais.",
    },
  ];

  return (
    <Element.Container>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💡 Habilidades
      </motion.h2>

      <Element.Grid>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </Element.Grid>
    </Element.Container>
  );
}
