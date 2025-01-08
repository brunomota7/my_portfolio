'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Bruno from "../../../public/images/bruno.png";

export function Banner() {
    return (
        <div className="relative w-full h-auto flex items-center justify-center text-white">
            <section className="w-4/5 flex flex-row items-center justify-between gap-16 py-16 px-40">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-1 text-center md:text-left">
                    <p className="text-lg text-gray-400">Olá, meu nome é</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc">Bruno Mota</h1>
                    <p className="w-96 mt-4 text-lg text-gray-400 leading-relaxed">
                        Sou um desenvolvedor full stack
                        apaixonado por tecnologia. Tenho como objetivo criar soluções para qualquer problema, além de
                        liderar equipes técnicas em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center">
                    <Image 
                        src={Bruno}
                        alt="Image Bruno"
                        className="rounded-md shadow-lg bg-gradient-to-b backdrop-blur-md"
                        width={300}
                        height={300}
                    />
                </motion.div>
            </section>
        </div>
    );
}
