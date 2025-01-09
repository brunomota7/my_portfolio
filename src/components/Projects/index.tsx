'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaEye, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

type Technology = 'HTML5' | 'NodeJS' | 'NextJS' | 'ReactJS';

const techIcons: Record<Technology, React.ComponentType> = {
    HTML5: FaHtml5,
    NodeJS: FaNode,
    NextJS: RiNextjsFill,
    ReactJS: FaReact,
};

const projects: {
    title: string;
    description: string;
    status: string;
    image: string;
    github: string;
    liveDemo: string;
    technologies: Technology[];
}[] = [
    {
        title: "Cultive+",
        description: "Descrição do projeto Cultive+.",
        status: "Em desenvolvimento",
        image: "/images/image0_0.jpg",
        github: "#",
        liveDemo: "#",
        technologies: ["HTML5", "NodeJS", "NextJS"],
    },
    {
        title: "Projeto 2",
        description: "Descrição do projeto 2.",
        status: "Concluído",
        image: "/images/image0_0.jpg",
        github: "#",
        liveDemo: "#",
        technologies: ["ReactJS", "NodeJS"],
    },
    {
        title: "Projeto 3",
        description: "Descrição do projeto 3.",
        status: "Concluído",
        image: "/images/image0_0.jpg",
        github: "#",
        liveDemo: "#",
        technologies: ["HTML5", "NextJS"],
    },
];

export default function Projects() {
    return (
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="relative w-full max-w-xs mx-auto sm:max-w-none bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                >
                    <div className="relative h-60">
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
                        <div className="flex items-center gap-2">
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
                                        <Icon className="w-8 h-8"/>
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
