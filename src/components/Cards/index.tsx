'use client'
import { motion } from 'framer-motion';

// Componente de Cards
export function Cards({ items, onSelect, selectedId }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-8">
            {items.map((item) => (
                <motion.div 
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={`p-4 rounded-lg shadow-lg cursor-pointer ${selectedId === item.id ? 'bg-sky-600' : 'bg-gray-800'}`}
                    whileHover={{ scale: 1.1 }}>
                    {item.icon}
                    <h3 className="mt-2 font-semibold">{item.title}</h3>
                </motion.div>
            ))}
        </div>
    );
}

// Componente de Conteúdo Dinâmico
export function DynamicContent({ activeContent }) {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={variants} 
            transition={{ duration: 0.5 }}
            className="p-8">
            {activeContent === 'projects' && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Projetos</h2>
                    <p>Projeto 1 - Descrição breve</p>
                    <p>Projeto 2 - Descrição breve</p>
                </div>
            )}
            {activeContent === 'skills' && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <ul className="list-disc pl-5">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </div>
            )}
            {activeContent === 'education' && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Educação</h2>
                    <p>Formação em Engenharia de Computação - Universidade Ceuma</p>
                </div>
            )}
        </motion.div>
    );
}
