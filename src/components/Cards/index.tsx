'use client';
import { useState } from "react";
import { motion } from 'framer-motion';
import Projects from "../Projects";
import Education from "../Education";

export default function Cards() {
    const [activeContent, setActiveContent] = useState('Projetos');

    const itemCards = [
        { id: 1, name: 'Projetos' },
        { id: 2, name: 'Educação' },
        { id: 3, name: 'Skills' },
    ];

    const renderContent = () => {
        switch (activeContent) {
            case 'Projetos':
                return <Projects />;
            case 'Educação':
                return <Education />;
            default:
                return <Projects />;
        }
    };

    return (
        <div className="relative w-full h-auto flex flex-col items-center justify-center text-white mb-12 px-4">
            <section className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-8"> {/* Cards Button */}
                {itemCards.map(({ id, name }) => (
                    <button
                        key={id}
                        onClick={() => setActiveContent(name)}
                        className="w-40 h-12 sm:w-60 sm:h-16 flex items-center justify-center font-semibold text-lg sm:text-xl rounded bg-fuchsia-600/50"
                    >
                        {name}
                    </button>
                ))}
            </section>

            {/* Conteúdo principal */}
            <div className="flex-1 w-full max-w-4xl">
                <motion.section
                    key={activeContent}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center p-4 min-h-[300px] sm:min-h-screen"
                >
                    {renderContent()}
                </motion.section>
            </div>
        </div>
    );
}
