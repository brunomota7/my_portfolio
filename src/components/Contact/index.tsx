'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// Componente de Contato
export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Preencha todos os campos!');
            return;
        }
        setStatus('Mensagem enviada com sucesso!');
    };

    return (
        <div className="w-full p-8 grid md:grid-cols-2 gap-8 bg-gray-900 text-white">
            {/* Coluna Esquerda */}
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold">Entre em Contato</h2>
                <p className="flex items-center gap-2">
                    <FaEnvelope /> contato@email.com
                </p>
                <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                </div>
            </motion.div>

            {/* Coluna Direita */}
            <motion.form 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input name="name" placeholder="Nome" className="p-3 rounded-md bg-gray-800" onChange={handleChange} />
                <input name="email" placeholder="E-mail" className="p-3 rounded-md bg-gray-800" onChange={handleChange} />
                <textarea name="message" placeholder="Mensagem" className="p-3 rounded-md bg-gray-800" onChange={handleChange}></textarea>
                <motion.button 
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    type="submit" 
                    className="p-3 rounded-md bg-sky-600 hover:bg-sky-500">Enviar</motion.button>
                {status && <p className="text-green-500">{status}</p>}
            </motion.form>
        </div>
    );
}