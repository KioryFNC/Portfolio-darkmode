import { ReactNode } from "react";
import * as Element from "./styles";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <Element.Card
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Element.Icon>{icon}</Element.Icon>
      <h3>{title}</h3>
      <p>{description}</p>
    </Element.Card>
  );
}
