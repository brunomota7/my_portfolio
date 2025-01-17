'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import { MdLocationPin } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import BrunoImage from "../../../public/images/bruno2.jpeg";
import TypingAnimation from "../ui/typing-animation";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Aside() {
    return (
        <>
        <aside className="w-full lg:w-[420px] p-4 flex flex-col items-center justify-center gap-4 bg-white/10 rounded-md z-10">
            <section className="w-4/5 h-80 p-2 flex flex-col items-center gap-4"> 
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="p-1 flex flex-col items-center rounded-full bg-gray-700 backdrop-blur-sm shadow-md shadow-fuchsia-400"> {/* Image */}
                    <Image 
                        src={BrunoImage}
                        alt="my Image"
                        className="rounded-full"
                    />
                </motion.div>
                <div className="w-full flex flex-col items-center"> {/* Title */}
                    <TypingAnimation className="text-3xl font-bold text-white">Bruno Mota</TypingAnimation>
                    <p className="text-lg font-normal text-fuchsia-400">Full Stack Developer</p>
                </div>
            </section>
            <section className="w-4/5 h-20 flex flex-col items-left"> {/* Infos */}
                    <div className="w-full h-auto flex items-center gap-1">
                        <MdLocationPin
                            className="w-[20] h-[20] text-fuchsia-400"/>
                        <p className="text-lg">São Luís, Ma</p>
                    </div>
                    <div className="w-full h-auto flex items-center gap-1">
                        <HiAcademicCap
                            className="w-[20] h-[20] text-fuchsia-400"/>
                        <p className="text-base">Engenharia de computação</p>
                    </div>
            </section>
            <section className="w-4/5 h-20 flex flex-col items-left gap-4"> 
                <div className="flex items-left gap-4"> {/* Social Midia */}
                    <motion.a 
                        href="https://github.com/brunomota7"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex gap-2 items-center">
                        <FaGithub className="w-[20] h-[20] text-white" title="GitHub" />
                        <span className="text-lg font-nomral">GitHub</span>
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/bruno-mota-dev/"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex gap-2 items-center">
                        <FaLinkedin className="w-[20] h-[20] text-white" title="Linkedin" />
                        <span className="text-lg font-nomral">Linkedin</span>
                    </motion.a>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    title="Download Currículo"
                    className="w-auto h-[40] p-2 flex items-center justify-center rounded-lg bg-fuchsia-600/50 hover:bg-fuchsia-700/50"> {/* Btn Download Curriculo */}
                    <a 
                    href="/public/curriculo/curriculo_Bruno_Eduardo_Pinheiro_Mota.pdf"
                    download="curriculo_Bruno_Eduardo_Pinheiro_Mota.pdf"
                    className="w-full h-full flex items-center justify-center gap-2 font-semibold">
                        <FaDownload />
                        Download Currículo
                    </a>
                </motion.button>
            </section>
        </aside>
        </>
    );
}