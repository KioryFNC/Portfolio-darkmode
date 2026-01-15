import * as Element from "./styles";

import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard.tsx";
import { VideoCard } from "../../components/VideoCard";
import { ContactCard } from "../../components/ContactCard/index.tsx";
import { SkillsSection } from "../../components/SkillsSection";

import Myself from "../../assets/Myself.jpg";
import Code from "../../assets/Code.png";

import CoffeeDelivery from "../../assets/Projects/CoffeeDelivery.png";
import GTA from "../../assets/Projects/GTA.png";
import Drift from "../../assets/Projects/drift.png";
import Timer from "../../assets/Projects/Timer.png";
import ToDo from "../../assets/Projects/ToDo.png";
import Patins from "../../assets/Projects/patins.png";
import TropadeElite from "../../assets/Thumbnail/Tropa de Elite.jpg";
import Reacher from "../../assets/Thumbnail/Reacher.jpg";
import Harry from "../../assets/Thumbnail/harry.png";
import Lula from "../../assets/Thumbnail/lula.png";
import Rocha from "../../assets/Thumbnail/rocha.png";
import Wagner from "../../assets/Thumbnail/wagner.png";

import LinkedinLogo from "../../assets/Contact/LinkedinLogo.png";
import GithubLogo from "../../assets/Contact/GithubLogo.png";
import EmailLogo from "../../assets/Contact/EnvelopeSimple.png";

import { motion } from "framer-motion";

import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../utils/translations";
import { ResumeDownloadCard } from "../../components/ResumeButton/index.tsx";
import { useState } from "react";
import { useSound } from "../../hooks/useSound";

export function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const { playHover, playClick } = useSound();

  const [category, setCategory] = useState<"sites" | "videos">("sites");

  const siteProjects = [
    {
      image: CoffeeDelivery,
      title: "CoffeeDelivery",
      description: t.projects.coffee,
      siteLink: "https://coffee-delivery-nu-liard.vercel.app/",
      codeLink: "https://github.com/KioryFNC/coffeeDelivery",
    },
    {
      image: ToDo,
      title: "ToDo-List",
      description: t.projects.todo,
      siteLink: "https://todo-list-lilac-phi.vercel.app/",
      codeLink: "https://github.com/KioryFNC/todoList",
    },
    {
      image: Patins,
      title: "Patins",
      description: t.projects.patins,
      siteLink: "https://pizza-shop-5o8w.vercel.app/",
      codeLink: "https://github.com/KioryFNC/patins-animation",
    },
    {
      image: Timer,
      title: "Timer",
      description: t.projects.timer,
      siteLink: "https://timer-ig-three.vercel.app/",
      codeLink: "https://github.com/KioryFNC/IgniteTimer",
    },
    {
      image: GTA,
      title: "GTA FiveM",
      description: t.projects.gta,
      siteLink: "https://five-m-six.vercel.app/",
      codeLink: "https://github.com/KioryFNC/stydyingFiveM",
    },
    {
      image: Drift,
      title: "Drift",
      description: t.projects.drift,
      siteLink: "https://drift-mu.vercel.app/",
      codeLink: "https://github.com/KioryFNC/Drift",
    },
  ];

  const videoProjects = [
    {
      image: Lula,
      title: "Tropa de Elite",
      description: "+ 1.800.000 views",
      videoLink:
        "https://www.tiktok.com/@moviescutdy/video/7567107218558995719",
    },
    {
      image: Harry,
      title: "Harry Potter",
      description: "+ 1.300.000 views",
      videoLink:
        "https://www.tiktok.com/@moviescutdy/video/7574814311143574795",
    },
    {
      image: Rocha,
      title: "Tropa de Elite",
      description: "+ 2.000.000 views",
      videoLink:
        "https://www.tiktok.com/@moviescutdy/video/7563403909180460299",
    },
    {
      image: Wagner,
      title: "Tropa de Elite",
      description: "+ 1.200.000 views",
      videoLink:
        "https://www.tiktok.com/@moviescutdy/video/7564140354748845324",
    },
    {
      image: TropadeElite,
      title: "Tropa de Elite",
      description: "+ 700.000 views",
      videoLink:
        "https://www.tiktok.com/@moviescutdy/video/7590086602106490113",
    },
    {
      image: Reacher,
      title: "Reacher",
      description: "+ 2.000 views",
      videoLink: "https://youtube.com/shorts/wL_yWgKDJdY",
    },
  ];

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
            <span>
              {t.hello} <strong>Yuri</strong>{" "}
              {language === "pt" ? "e sou" : "and I'm"}
            </span>
            <h2>{t.role}</h2>
            <p>{t.description}</p>
          </Element.MySelf>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Element.About>
            <h3>{t.aboutTitle}</h3>
            {t.aboutText.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <ResumeDownloadCard fileUrl="/Curriculo.pdf" />
            <SkillsSection />
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
            <h3>{t.myWork}</h3>
            <h4>{t.featuredProjects}</h4>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <button
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  setCategory("sites");
                }}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  background: category === "sites" ? "#5d8682" : "#444",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {t.websites}
              </button>
              <button
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  setCategory("videos");
                }}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  background: category === "videos" ? "#5d8682" : "#444",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {t.video}
              </button>
            </div>
          </div>
          <Element.Project>
            {category === "sites" &&
              siteProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            {category === "videos" &&
              videoProjects.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <VideoCard {...video} />
                </motion.div>
              ))}
          </Element.Project>
        </Element.MyProjects>
      </motion.div>

      <Element.Contact>
        <motion.div
          className="informations"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <h3>{t.contact}</h3>
          <h4>{t.workTogether}</h4>
          <span>{t.reachOut}</span>
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
              {
                image: GithubLogo,
                title: "Github",
                link: "https://github.com/KioryFNC",
              },
              {
                image: LinkedinLogo,
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/yuri-barros-luz-014010258/",
              },
              {
                image: EmailLogo,
                title: "E-mail",
                link: "mailto:yuri.barros.luz.familia@gmail.com",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ContactCard {...contact} />
              </motion.div>
            ))}
          </Element.ContactCards>
        </motion.div>
      </Element.Contact>
    </Element.Root>
  );
}
