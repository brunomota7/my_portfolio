'use client'
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'; 

export default function Contact() {
    return (
        <section className="relative w-full h-auto flex items-center justify-center px-4 md:px-0">
            <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 p-6 md:p-8 bg-gray-700 flex flex-col justify-center gap-6">
                    <div className='text-center md:text-left mb-4'>
                        <h2 className='text-2xl md:text-4xl font-bold text-white'>Entre em contato</h2>
                        <p className='text-sm md:text-lg font-light text-gray-400'>Para mais informações, entre em contato.</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <FaEnvelope className="text-fuchsia-400 w-5 h-5 md:w-6 md:h-6" />
                            <h3 className='text-xl md:text-2xl font-bold text-white'>Envie-me um email</h3>
                        </div>
                        <a 
                            href="mailto:bruno7motadev@gmail.com" 
                            className='text-sm md:text-lg font-semibold text-fuchsia-400 hover:underline'
                        >
                            bruno7motadev@gmail.com
                        </a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <FaPhone className="text-fuchsia-400 w-5 h-5 md:w-6 md:h-6" />
                            <h3 className='text-xl md:text-2xl font-bold text-white'>Telefone</h3>
                        </div>
                        <a 
                            href="tel:+5598991002578" 
                            className='text-sm md:text-lg font-semibold text-fuchsia-400 hover:underline'
                        >
                            +55 (98) 99100-2578
                        </a>
                    </div>

                    <div className='flex gap-4 justify-center md:justify-start'>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            title='Linkedin'
                            href='#'
                            className='cursor-pointer'>
                            <FaLinkedin className="text-white w-6 h-6 md:w-8 md:h-8 hover:text-fuchsia-400" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            title='GitHub'
                            href='#'
                            className='cursor-pointer'>
                            <FaGithub className="text-white w-6 h-6 md:w-8 md:h-8 hover:text-fuchsia-400" />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 p-6 md:p-8 bg-gray-800 flex flex-col justify-center gap-6">
                    <div className='text-center md:text-left mb-4'>
                        <h2 className='text-2xl md:text-4xl font-bold text-white'>Tire suas dúvidas</h2>
                        <p className='text-sm md:text-lg font-light text-gray-400'>
                            Você pode entrar em contato comigo a qualquer momento via 
                            <a href="mailto:bruno7motadev@gmail.com" className='font-semibold text-fuchsia-400 hover:underline ml-1'>bruno7motadev@gmail.com</a>
                        </p>
                    </div>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <label htmlFor='nome' className='block text-sm md:text-lg font-semibold text-white'>Nome</label>
                            <input type="text" name='nome' id='nome' placeholder='Seu nome' required 
                                className='w-full p-2 mt-1 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600/50' />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm md:text-lg font-semibold text-white'>Email</label>
                            <input type="email" name="email" id="email" placeholder='Seu email' required 
                                className='w-full p-2 mt-1 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ring-fuchsia-600/50' />
                        </div>
                        <div>
                            <label htmlFor='duvida' className='block text-sm md:text-lg font-semibold text-white'>Como podemos ajudar você?</label>
                            <textarea name="duvida" id="duvida" placeholder='Sua dúvida ...' 
                                className='w-full p-2 mt-1 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600/50 h-24 resize-none' />
                        </div>
                        <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                            title='Enviar'
                            className='w-full p-3 mt-4 bg-fuchsia-600/50 text-white font-semibold rounded-md hover:bg-fuchsia-700/50 transition duration-300'>
                            Enviar
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
