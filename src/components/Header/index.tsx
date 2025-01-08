'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from '../../../public/images/logo.png';

export function Header() {
    const itemLink = [
        { id: 1, name: 'Home', link: '#home' },       
        { id: 2, name: 'Projetos', link: '#projects' },
        { id: 3, name: 'Sobre', link: '#about' },
        { id: 4, name: 'Contato', link: '#contact' },       
    ];

    return (
        <header className="relative w-full bg-transparent text-white">
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="top-0 left-0 w-full h-16 px-8 md:px-40 flex items-center justify-between z-10">
                <section>
                    <Image 
                        src={Logo}
                        alt="Logo Image"
                        width={80}
                        height={80}
                        className="cursor-pointer hover:scale-110 transition-transform"
                    />
                </section>
                <section className="flex items-center justify-center gap-6">
                    {itemLink.map(({ id, name, link }) => (
                        <motion.a
                            key={id}
                            href={link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-lg font-medium hover:text-sky-500 transition-colors">
                            {name}
                        </motion.a>
                    ))}
                </section>
            </motion.div>
        </header>
    );
}
