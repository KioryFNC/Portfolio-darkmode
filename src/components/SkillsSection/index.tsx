import { FaCss3Alt, FaGithub, FaHtml5, FaReact, FaVideo } from "react-icons/fa";
import * as Element from "./styles";
import {
  SiAdobeaftereffects,
  SiCanva,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { SkillCard } from "../SkillCard";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../utils/translations";

export function SkillsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      icon: <FaReact />,
      title: "React",
      description: t.descriptionSkill.React,
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      description: t.descriptionSkill.JavaScript,
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
      description: t.descriptionSkill.TypeScript,
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind",
      description: t.descriptionSkill.Tailwind,
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description: t.descriptionSkill.HTML5,
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description: t.descriptionSkill.CSS3,
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      description: t.descriptionSkill.GitHub,
    },
    {
      icon: <SiCanva />,
      title: "Canva",
      description: t.descriptionSkill.Canva,
    },
    {
      icon: <FaVideo />,
      title: "CapCut",
      description: t.descriptionSkill.CapCut,
    },
    {
      icon: <SiAdobeaftereffects />,
      title: "After Effects",
      description: t.descriptionSkill.AfterEffects,
    },
  ];

  return (
    <Element.Container>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.skills}
      </motion.h3>

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
