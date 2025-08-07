import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import {Switch} from "./Toggle";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <section className="md:hidden">
            <button 
                onClick={toggleMenu}
                className="p-2 hover:text-blue-500 rounded-md transition-colors duration-300 cursor-pointer"
                aria-label="Toggle menu"
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            
            {/* Overlay com animação */}
            <div 
                className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                    isOpen 
                        ? 'opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Overlay para fechar ao clicar fora */}
                <div 
                    className="absolute inset-0 bg-black/50"
                    onClick={closeMenu}
                />
                
                {/* Menu com animação de slide */}
                <nav className={`absolute top-0 right-0 w-64 h-full shadow-lg p-6 border-l-2 border-blue-200 dark:border-blue-700 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200">Menu</h3>
                        <button 
                            onClick={closeMenu}
                            className="p-1 hover:text-blue-700 dark:hover:text-blue-400 rounded-md transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <FiX className="cursor-pointer" size={20} />
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-4 md:hidden">
                        <a 
                            className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold py-2 transition-all duration-200 hover:translate-x-2" 
                            href="#About"
                            onClick={closeMenu}
                        >
                            About
                        </a>
                        <a 
                            className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold py-2 transition-all duration-200 hover:translate-x-2" 
                            href="#Projects"
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                        <a 
                            className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold py-2 transition-all duration-200 hover:translate-x-2" 
                            href="#Links"
                            onClick={closeMenu}
                        >
                            Links
                        </a>
                        <a 
                            className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold py-2 transition-all duration-200 hover:translate-x-2" 
                            href="#Emails"
                            onClick={closeMenu}
                        >
                            Emails
                        </a>
                        <a 
                            className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold py-2 transition-all duration-200 hover:translate-x-2" 
                            href="#Technologies"
                            onClick={closeMenu}
                        >
                            Tecnologias
                        </a>
                        <div className="md:hidden flex">
                            <Switch/>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}