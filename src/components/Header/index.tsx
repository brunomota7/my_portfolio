'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from '../../../public/images/logo.png';
import { useState } from 'react';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const itemLink = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'Projetos', link: '#projects' },
        { id: 3, name: 'Sobre', link: '#about' },
        { id: 4, name: 'Contato', link: '#contact' },
    ];

    return (
        <header className="relative w-full flex items-center justify-center bg-transparent text-white">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="top-0 left-0 w-4/5 px-8 md:px-40 flex items-center justify-between h-20 z-10"
            >
                <section>
                    <Image
                        src={Logo}
                        alt="Logo Image"
                        width={80}
                        height={80}
                        className="cursor-pointer hover:scale-110 transition-transform"
                    />
                </section>
                {/* Desktop Navigation */}
                <section className="hidden md:flex items-center justify-center gap-6 z-10">
                    {itemLink.map(({ id, name, link }) => (
                        <motion.a
                            key={id}
                            href={link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-lg font-light hover:text-fuchsia-400 transition-colors"
                        >
                            {name}
                        </motion.a>
                    ))}
                </section>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        id="menu-btn"
                        onClick={toggleMenu}
                        className="block text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </motion.div>
            {/* Mobile Menu */}
            {menuOpen && (
                <motion.section
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden absolute top-16 right-4 w-64 bg-gray-800 text-white flex flex-col items-start gap-4 px-4 py-6 rounded-lg shadow-lg z-10"
                >
                    {itemLink.map(({ id, name, link }) => (
                        <motion.a
                            key={id}
                            href={link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-lg font-light hover:text-fuchsia-400 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {name}
                        </motion.a>
                    ))}
                </motion.section>
            )}
        </header>
    );
}
