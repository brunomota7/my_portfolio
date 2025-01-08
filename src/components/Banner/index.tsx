'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Bruno from "../../../public/images/bruno.png";

export function Banner() {
    return (
        <div className="relative w-full text-white">
            <section className="flex flex-row items-center justify-center gap-12 py-16">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-1 text-center md:text-left">
                    <p className="text-lg text-gray-400">Olá, meu nome é</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc">Bruno Mota</h1>
                    <p className="w-96 mt-4 text-lg text-gray-400 leading-relaxed">
                        Olá, meu nome é <span className="font-bold hover:text-sky-500">Bruno Mota</span> e sou um desenvolvedor full stack
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
