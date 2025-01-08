'use client'
import RetroGrid from '@/components/ui/retro-grid';
import { CodeXml, User, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  // Ícones
  const icons = [
    { id: 1, icon: <CodeXml />, link: "#" },
    { id: 2, icon: <User />, link: "#" },
    { id: 3, icon: <Github />, link: "#" },
  ];

  // Animação de texto digitando
  const text = "www.brunomotadev.com";
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-[#0f172a] text-white p-4 md:p-0">
      {/* Seção de Ícones */}
      <motion.section 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
        {icons.map(({ id, icon, link }) => (
          <motion.a
            key={id}
            href={link}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 shadow-[#38bdf8]/50 backdrop-blur-sm"
          >
            {icon}
          </motion.a>
        ))}
      </motion.section>

      {/* Título */}
      <section className="flex flex-col items-center justify-center gap-1">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          Portfolio Website
        </motion.h2>
      </section>

      {/* Link com Digitação */}
      <section className="flex flex-col items-center justify-center gap-1">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm bg-white/10 rounded-lg p-2 text-sm md:text-base"
        >
          {text.split("").map((char, i) => (
            <motion.span key={i} variants={child} className="text-[#ccc]">
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Botão */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          onClick={() => window.location.href = '/main'}
          className="px-6 py-2 mt-4 text-white font-semibold bg-[#9333ea] rounded-lg shadow-lg text-sm md:text-base">
          Next
        </motion.button>
      </section>

      <RetroGrid />
    </main>
  );
}
