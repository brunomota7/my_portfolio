'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Logo from "../../../public/images/logo.png";

export function Header() {
    const itemLink = [
        { id: 1, name: "Home", link: "/home" },       
        { id: 2, name: "Projetos", link: "#projects" },       
    ];

    return (
        <header className="fixed top-0 left-0 w-full">
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-16 px-4 md:px-40 flex items-center justify-between">
                <section> {/* Logo */}
                    <Image 
                        src={Logo}
                        alt="Logo Image"
                        width={100}
                        height={100}
                    />
                </section>
                <section className="flex items-center justify-center gap-4"> {/* Links */}
                    {itemLink.map(({ id, name, link }) => (
                        <motion.a
                            key={id}
                            href={link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="font-light text-normal p-2 rounded-lg hover:bg-sky-700 hover:text-white">
                            {name}
                        </motion.a>
                    ))}
                </section>
            </motion.div>
        </header>
    );
}