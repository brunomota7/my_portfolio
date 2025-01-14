'use client'
import { useState } from "react";
import Education from "../Education";
import Projects from "../Projects";
import Contact from "../Contact";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { PiUserListFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import About from "../About";
import "../../styles/scrollbar.css";

export default function Main() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeContent, setActiveContent] = useState('About');

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const renderContent = () => {
        switch (activeContent) {
            case 'About':
                return <About />;
            case 'Education':
                return <Education />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    };

    const menuItems = [
        { label: 'About', icon: <PiUserListFill />, key: 'About' },
        { label: 'Education', icon: <FaUniversity />, key: 'Education' },
        { label: 'Projects', icon: <MdDashboard />, key: 'Projects' },
        { label: 'Contact', icon: <GrContact />, key: 'Contact' },
    ];

    return (
        <div className="flex flex-col lg:flex-row w-full lg:w-4/5 z-10">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: isOpen ? 0 : 0 }}
                animate={{ x: isOpen ? 0 : 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                className={`hidden lg:block h-full bg-white/10 text-white rounded-md z-20 ${
                    isOpen ? 'w-64' : 'w-16'
                } transition-all duration-300`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    {isOpen && (
                        <h2 className="text-lg font-bold">Menu</h2>
                    )}
                    <button onClick={toggleSidebar} className="text-white">
                        {!isOpen ? <Menu /> : <X />}
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    {menuItems.map(({ label, icon, key }) => (
                        <motion.button
                            key={key}
                            onClick={() => setActiveContent(key)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className={`flex items-center space-x-3 p-2 rounded-md ${
                                activeContent === key ? 'bg-fuchsia-600/50 text-white' : 'text-gray-400'
                            } hover:bg-fuchsia-600/50 hover:text-white transition-colors ${
                                isOpen ? 'w-full' : 'justify-center'
                            }`}
                        >
                            <span className="text-2xl">{icon}</span>
                            {isOpen && <span className="text-xl">{label}</span>}
                        </motion.button>
                    ))}
                </nav>
            </motion.aside>

            {/* Mobile Menu */}
            <header className="lg:hidden bg-white/10 text-white w-full flex justify-between items-center p-4 z-20">
                <h1 className="text-lg font-bold">Menu</h1>
                <button onClick={toggleMenu} className="text-white">
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </header>
            {menuOpen && (
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 text-white flex flex-col items-center justify-center z-30"
                >
                    {menuItems.map(({ label, key }) => (
                        <motion.button
                            key={key}
                            onClick={() => {
                                setActiveContent(key);
                                setMenuOpen(false);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl mb-6"
                        >
                            {label}
                        </motion.button>
                    ))}
                </motion.nav>
            )}

            {/* Main Content */}
            <motion.main
                initial={{ opacity: 0, top: 100 }}
                whileInView={{ opacity: 1, top: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex-1 overflow-y-auto mt-2 lg:mt-0 ml-0 lg:ml-1 bg-white/10 rounded-md transition-all duration-300 ease-in-out scrollbar`}
            >
                <motion.div
                    key={activeContent}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                    className="flex items-center justify-center p-6 min-h-screen"
                >
                    {renderContent()}
                </motion.div>
            </motion.main>
        </div>
    );
}
