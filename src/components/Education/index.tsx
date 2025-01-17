'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaDatabase, FaTools, FaEye } from 'react-icons/fa';
import Image from 'next/image';

import JavaCriandoSuaPrimeiraAplicacao from "../../../public/certificados/JavaCriandoSuaPrimeiraAplicacao.jpg";
import JavaAplicandoOrientacaoObjeto from "../../../public/certificados/Java-AplicandoOrientacaoObjeto.jpg";
import JavaConsumindoApi from "../../../public/certificados/Java-consumindoAPI-gravandoArquivosLidandoComErros.jpg";
import JavaTrabalhandoComListasEColecoes from "../../../public/certificados/Java-TrabalhandoComListasColecaoDeDados.jpg";
import JavaNwlUnite from "../../../public/certificados/NLW-Unite-Java-Rocketseat.jpg";

import JsCriePaginasDinamicas from "../../../public/certificados/JavaScriptParaWeb-CriePáginasDinâmicas.pdf.jpg";
import JsManipulandoDOM from "../../../public/certificados/JavaScript-ManipulandoElementosNoDOM.pdf.jpg";
import JsValidandoForm from "../../../public/certificados/JavaScript-ValidandoFormulários.pdf.jpg";
import JsConsumindoApi from "../../../public/certificados/JavaScript-ConsumindoETratandoDadosDeUmaAPI.pdf.jpg";
import JsCriandoRequisicoes from "../../../public/certificados/JavaScript-CriandoRequisições.pdf.jpg";

export default function Education() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const academicWorks = [
        {
            title: "Cultive+",
            description: "A Cultive+ é uma plataforma inovadora voltada para apoiar pequenos e médios agricultores, oferecendo funcionalidades como gestão de cultivos, previsão do tempo e uma área de vendas online. Ela conecta agricultores a compradores, facilitando a comercialização de produtos e promovendo o desenvolvimento agrícola sustentável.",
            year: 2024,
            status: "Em desenvolvimento"
        },
        {
            title: "Modulação de sinais de amplitude (AM) e frequência (FM) usando dados de temperatura",
            description: "Este projeto utiliza dados de variação de temperatura para demonstrar conceitos de modulação de sinais, como AM (modulação de amplitude) e FM (modulação de frequência). Ele permite ajustar parâmetros como frequência e amplitude da onda portadora, mostrando visualmente como essas alterações afetam os sinais modulados. É uma aplicação prática para entender fundamentos de comunicação de sinais.",
            year: 2024,
            status: "Concluído"
        },
    ];

    const certifications = {
        frontend: [
            { title: "JavaScript: Crie páginas dinâmicas", provider: "Alura", year: 2023, image: JsCriePaginasDinamicas },
            { title: "JavaScript: Manipulando elementos no DOM", provider: "Alura", year: 2023, image: JsManipulandoDOM },
            { title: "JavaScript: Validando formulários", provider: "Alura", year: 2023, image: JsValidandoForm },
            { title: "JavaScript: Consumindo e tratando dados de uma API", provider: "Alura", year: 2023, image: JsConsumindoApi },
            { title: "JavaScript: Criando requisições", provider: "Alura", year: 2023, image: JsCriandoRequisicoes },
        ],
        backend: [
            { title: "Java: Criando sua primeira aplicação", provider: "Alura", year: 2024, image: JavaCriandoSuaPrimeiraAplicacao },
            { title: "Java: Aplicando Orientação a Objetos", provider: "Alura", year: 2024, image: JavaAplicandoOrientacaoObjeto },
            { title: "Java: Consumindo Api, gravando dados e lidando com erros", provider: "Alura", year: 2024, image: JavaConsumindoApi },
            { title: "Java: Trabalhando com listas e coleções de dados", provider: "Alura", year: 2024, image: JavaTrabalhandoComListasEColecoes },
            { title: "Java: NWL Unite", provider: "Rocetseat", year: 2024, image: JavaNwlUnite },
        ],
        /* tools: [], */
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 text-white rounded-md">
            {/* Graduação */}
            <section className="w-full max-w-4xl mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-8"
                >
                    <FaGraduationCap className="text-fuchsia-400 text-4xl mb-4" />
                    <h2 className="text-3xl font-bold">Graduação</h2>
                    <p className="text-gray-300 text-lg mt-2">
                        Estudante de Engenharia de Computação - 7º Período <br />
                        Universidade Ceuma - São Luís, MA
                    </p>
                </motion.div>
            </section>

            {/* Trabalhos Acadêmicos */}
            <section className="w-full max-w-4xl mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Trabalhos Acadêmicos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {academicWorks.map((work, index) => (
                            <div
                                key={index}
                                className="bg-white/10 p-4 rounded-md shadow-md hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-fuchsia-400">{work.title}</h3>
                                <p className="text-gray-300 mt-2">{work.description}</p>
                                <div className='w-full flex items-center gap-1 mt-2'>
                                    <span
                                        className={`w-3 h-3 rounded-full ${
                                        work.status === "Concluído"
                                            ? "bg-green-400"
                                            : "bg-yellow-400"
                                        }`}
                                    ></span>
                                    <p className='text-gray-400 text-sm'>{work.status}</p>
                                </div>
                                <span className="text-sm text-gray-500 mt-2 block">Ano: {work.year}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Certificações */}
            <section className="w-full max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Certificações</h2>
                    <div className="flex flex-col gap-8">
                        {Object.entries(certifications).map(([area, certs], idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    {area === 'frontend' && <FaCode className="text-fuchsia-400 text-2xl" />}
                                    {area === 'backend' && <FaDatabase className="text-fuchsia-400 text-2xl" />}
                                    {area === 'tools' && <FaTools className="text-fuchsia-400 text-2xl" />}
                                    <h3 className="text-2xl font-semibold capitalize">{area}</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                    {certs.map((cert, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="relative bg-white/10 rounded-md overflow-hidden shadow-md cursor-pointer"
                                            onClick={() => setSelectedImage(cert.image.src)}
                                        >
                                            <Image
                                                src={cert.image}
                                                alt={cert.title}
                                                width={200}
                                                height={200}
                                                className="w-full h-40 object-cover"
                                            />
                                            <div className="absolute p-2 inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                                <span>
                                                    <FaEye 
                                                        className="w-6 h-6 hover:text-fuchsia-400"
                                                    />
                                                </span>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="text-lg font-semibold text-fuchsia-400">{cert.title}</h4>
                                                <p className="text-gray-300">{cert.provider}</p>
                                                <span className="text-sm text-gray-500">Ano: {cert.year}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Modal para a imagem */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <Image
                        src={selectedImage}
                        alt="Certificado"
                        width={800}
                        height={600}
                        className="rounded-md"
                    />
                </motion.div>
            )}
        </div>
    );
}
