'use client';

import { motion } from "framer-motion";
import { FaJava, FaPython, FaNodeJs, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMysql, SiTypescript } from "react-icons/si";
import { HiOutlineLightBulb, HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineLayers, MdOutlineCommit } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";

export default function About() {
    const hardSkills = [
        { name: "HTML", icon: <FaHtml5 className="text-xl text-[#e54c21]" />, level: 80 },
        { name: "CSS", icon: <FaCss3 className="text-xl text-[#29aae3]" />, level: 80 },
        { name: "JavaScript", icon: <IoLogoJavascript className="text-xl text-[#f7e018]" />, level: 80 },
        { name: "React/Next.js", icon: <FaReact className="text-xl text-[#61dafb]" />, level: 75 },
        { name: "Node.js", icon: <FaNodeJs className="text-xl text-[#83cd29]" />, level: 60 },
        { name: "TypeScript", icon: <SiTypescript className="text-xl text-[#007acc]" />, level: 60 },
        { name: "Java", icon: <FaJava className="text-xl text-[#f89820]" />, level: 30 },
        { name: "Python", icon: <FaPython className="text-xl text-[#3670a0]" />, level: 40 },
        { name: "MySQL", icon: <SiMysql className="text-xl text-[#00758f]" />, level: 60 },
    ];

    const softSkills = [
        { name: "Resolução de Problemas", icon: <HiOutlineLightBulb className="text-xl text-yellow-400" /> },
        { name: "Trabalho em Equipe", icon: <HiOutlineUserGroup className="text-xl text-green-400" /> },
        { name: "Liderança", icon: <MdOutlineLayers className="text-xl text-red-400" /> },
        { name: "Comunicação", icon: <MdOutlineCommit className="text-xl text-blue-400" /> },
    ];

    const timeline = [
        {
        company: "Conex",
        role: "Estagiário de Desenvolvimento Full Stack",
        time: "Ago 2022 - Nov 2022",
        },
    ];

    return (
        <div className="flex flex-col w-full gap-6 p-6 text-white">
        {/* Introdução */}
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 p-6 rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-bold text-fuchsia-400">Sobre Mim</h2>
            <p className="mt-4 text-lg">
            Olá! Meu nome é Bruno Mota, tenho 20 anos e sou aspirante a desenvolvedor Full Stack. 
            Atualmente, curso Engenharia de Computação na Universidade Ceuma e tenho experiência 
            em tecnologias como Java, Python, Node.js, React, e muito mais.
            </p>
        </motion.section>

        {/* Experiência */}
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 p-6 rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-bold text-fuchsia-400">Experiência</h2>
            <div className="flex flex-col mt-6 gap-6">
            {timeline.map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="flex items-start gap-4"
                >
                <div className="w-2 h-2 mt-2 bg-fuchsia-400 rounded-full"></div>
                <div>
                    <h3 className="text-lg font-bold">{item.company}</h3>
                    <p className="text-sm text-gray-300">{item.role}</p>
                    <p className="text-sm text-gray-400">{item.time}</p>
                </div>
                </motion.div>
            ))}
            </div>
        </motion.section>

        {/* Hard Skills */}
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 p-6 rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-bold text-fuchsia-400">Hard Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {hardSkills.map((skill, index) => (
                <div key={index}>
                <div className="flex items-center gap-4">
                    {skill.icon}
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-md mt-2">
                    <div
                    className="h-2 bg-fuchsia-400 rounded-md"
                    style={{ width: `${skill.level}%` }}
                    ></div>
                </div>
                </div>
            ))}
            </div>
        </motion.section>

        {/* Soft Skills */}
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 p-6 rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-bold text-fuchsia-400">Soft Skills</h2>
            <div className="flex flex-wrap gap-6 mt-6">
            {softSkills.map((skill, index) => (
                <div
                key={index}
                className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-md shadow-md"
                >
                {skill.icon}
                <h3 className="text-lg font-bold">{skill.name}</h3>
                </div>
            ))}
            </div>
        </motion.section>
        </div>
    );
}
