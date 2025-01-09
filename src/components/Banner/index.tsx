'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Bruno from "../../../public/images/bruno.png";
import TypingAnimation from "../ui/typing-animation";

export function Banner() {
    return (
        <div className="relative w-full h-auto flex items-center justify-center text-white">
            <section className="w-4/5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-8 md:py-16 px-4 md:px-40">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-2 text-center md:text-left">
                    <p className="text-sm md:text-lg text-gray-400">Olá, meu nome é</p>
                    <TypingAnimation className="text-2xl md:text-6xl font-bold text-fuchsia-400">Bruno Mota</TypingAnimation>
                    <p className="mt-4 text-sm md:text-lg text-gray-400 leading-relaxed max-w-xs md:max-w-md mx-auto md:mx-0">
                        Sou um desenvolvedor full stack apaixonado por tecnologia. Tenho como objetivo criar soluções para qualquer problema, além de liderar equipes técnicas em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.
                        <a 
                            href={"#"}
                            className="ml-2 text-sm font-semibold text-fuchsia-400 hover:underline">
                            Saiba mais...
                        </a>
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center">
                    <Image 
                        src={Bruno}
                        alt="Imagem Bruno"
                        className="rounded-md shadow-lg bg-gradient-to-b backdrop-blur-md"
                        width={250}
                        height={250}
                        priority
                    />
                </motion.div>
            </section>
        </div>
    );
}
