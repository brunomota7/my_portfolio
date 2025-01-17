'use client';
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaEye, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

import CultiveImg from "../../../public/projects/cultive.jpg";
import SafeAlert from "../../../public/projects/safe_alert.jpg";
import DevBurguer from "../../../public/projects/dev_burger.jpg";

type Technology = "HTML5" | "NodeJS" | "NextJS" | "ReactJS" | "TailwindCss" | "Typescript" | "Javascript" | "Css3";

const techIcons: Record<Technology, React.ElementType> = {
  HTML5: FaHtml5,
  NodeJS: FaNode,
  NextJS: RiNextjsFill,
  ReactJS: FaReact,
  TailwindCss: RiTailwindCssFill,
  Typescript: SiTypescript,
  Javascript: IoLogoJavascript,
  Css3: IoLogoCss3
};

const projects: {
  title: string;
  description: string;
  status: string;
  image: StaticImageData;
  github: string;
  liveDemo: string;
  technologies: Technology[];
}[] = [
  {
    title: "Cultive+",
    description: "A Cultive+ é uma plataforma inovadora voltada para apoiar pequenos e médios agricultores, oferecendo funcionalidades como gestão de cultivos, previsão do tempo e uma área de vendas online.",
    status: "Em desenvolvimento",
    image: CultiveImg,
    github: "https://github.com/brunomota7/cultive-frontend",
    liveDemo: "https://cultive-frontend.vercel.app",
    technologies: ["NextJS", "TailwindCss", "Typescript", "Javascript"],
  },
  {
    title: "SafeAlert",
    description: "Uma plataforma para mostrar áreas de alagamento em tempo real em São Luís - MA.",
    status: "Concluído",
    image: SafeAlert,
    github: "https://github.com/brunomota7/safe_alert",
    liveDemo: "https://safealert.vercel.app",
    technologies: ["HTML5", "Css3", "Javascript"],
  },
  {
    title: "Dev Burguer",
    description: "Pequeno projeto de uma atendimento totalmente funcional com integração ao WhatsApp da lanchonete.",
    status: "Concluído",
    image: DevBurguer,
    github: "https://github.com/brunomota7/sistema-lanchonete",
    liveDemo: "https://sistema-lanchonete.vercel.app",
    technologies: ["HTML5", "Css3", "Javascript"],
  },
];

export default function Projects() {
  return (
    <section className="w-full px-4 py-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div className="relative h-56 sm:h-64">
            <Image
              src={project.image}
              alt={`Imagem do ${project.title}`}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 hover:opacity-100 transition duration-300">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl"
              >
                <FaEye />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`w-3 h-3 rounded-full ${
                  project.status === "Concluído"
                    ? "bg-green-400"
                    : "bg-yellow-400"
                }`}
              ></span>
              <p className="text-sm text-gray-400">{project.status}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech, idx) => {
                const Icon = techIcons[tech];
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white text-xl"
                    title={tech}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
