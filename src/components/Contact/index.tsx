'use client'
/* import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; */
import { Mail, MapPin, Phone } from 'lucide-react';

// Componente de Contato
export default function Contact() {
    return (
        <section className="relative w-full h-auto mb-12 flex items-center justify-center" id='Contact'>
            <div className="w-4/5 h-auto flex items-center justify-center px-40">
                <div className="w-full md:w-1/2 p-8 bg-gray-700 flex flex-col justify-center gap-6"> {/* Infos */}
                    <div className='text-center md:text-left mb-4'>
                        <h2 className='text-4xl font-bold text-white'>Entre em contato</h2>
                        <p className='text-lg font-light text-gray-400'>Para mais informações, entre em contato.</p>
                    </div>

                    <div className='flex flex-col gap-2'> {/* Email */}
                        <div className='flex items-center gap-2'>
                            <Mail className="text-fuchsia-400" />
                            <h3 className='text-2xl font-bold text-white'>Envie-nos um email</h3>
                        </div>
                        <a 
                            href="mailto:cultive@ourcompany.com" 
                            className='text-lg font-semibold text-fuchsia-400 hover:underline'
                        >
                            cultive@ourcompany.com
                        </a>
                    </div>

                    <div className='flex flex-col gap-2'> {/* Phone */}
                        <div className='flex items-center gap-2'>
                            <Phone className="text-fuchsia-400" />
                            <h3 className='text-2xl font-bold text-white'>Telefone</h3>
                        </div>
                        <a 
                            href="tel:+5598991002578" 
                            className='text-lg font-semibold text-fuchsia-400 hover:underline'
                        >
                            +55 (98) 99100-2578
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 bg-gray-800 flex flex-col justify-center gap-6"> {/* Form */}
                    <div className='text-center md:text-left mb-4'>
                        <h2 className='text-4xl font-bold text-white'>Tire suas dúvidas</h2>
                        <p className='text-lg font-light text-gray-400'>
                            Você pode entrar em contato comigo a qualquer momento via 
                            <a href="mailto:bruno7motadev@gmail.com" className='font-semibold text-fuchsia-400 hover:underline ml-1'>bruno7motadev@gmail.com</a>
                        </p>
                    </div>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <label htmlFor='nome' className='block text-lg font-semibold text-white'>Nome</label>
                            <input type="text" name='nome' id='nome' placeholder='Seu nome' required 
                                className='w-full p-2 mt-1 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600/50' />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-lg font-semibold text-white'>Email</label>
                            <input type="email" name="email" id="email" placeholder='Seu email' required 
                                className='w-full p-2 mt-1 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ring-fuchsia-600/50' />
                        </div>
                        <div>
                            <label htmlFor='duvida' className='block text-lg font-semibold text-white'>Como podemos ajudar você?</label>
                            <textarea name="duvida" id="duvida" placeholder='Sua dúvida ...' 
                                className='w-full p-2 mt-1 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600/50 h-24' />
                        </div>
                        <button type="submit" className='w-full p-3 mt-4 bg-fuchsia-600/50 text-white font-semibold rounded-md hover:bg-fuchsia-700/50 transition duration-300'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}