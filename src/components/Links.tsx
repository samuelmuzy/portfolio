import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"

export const Links = () => {
    return (
        <section id="Contatos" className="md:w-11/12 w-full self-center h-full flex flex-col items-center justify-between border-2 border-blue-200 dark:border-blue-700 rounded-2xl shadow-lg bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-6 gap-6">
            <p className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-200 mb-2">Entre em contato</p>

            <div id="Links" className="flex flex-col self-start w-full gap-4">
                <div className="flex border-2 border-blue-200 dark:border-blue-700 items-center gap-4 p-5 rounded-xl bg-white/60 dark:bg-gray-900/60 transition-colors duration-300">
                    <FiPhone className="text-blue-700 dark:text-blue-300 w-7 h-7"/>
                    <div>
                        <p className="text-blue-900 dark:text-blue-100 font-semibold">Telefone</p>
                        <p className="text-blue-800 dark:text-blue-200">+55 (32) 984828122</p>
                    </div>
                </div>
                <div className="flex border-2 border-blue-200 dark:border-blue-700 items-center gap-4 p-5 rounded-xl bg-white/60 dark:bg-gray-900/60 transition-colors duration-300">
                    <FiMail className="text-blue-700 dark:text-blue-300 w-7 h-7 "/>
                    <div>
                        <p className="text-blue-900 dark:text-blue-100 font-semibold">Email</p>
                        <p className="text-blue-800 dark:text-blue-200 not-md:text-xs">samuelmuzyfernandes4@gmail.com</p>
                    </div>
                </div>
                <div className="flex border-2 border-blue-200 dark:border-blue-700 items-center gap-4 p-5 rounded-xl bg-white/60 dark:bg-gray-900/60 transition-colors duration-300">
                    <FiMapPin className="text-blue-700 dark:text-blue-300 w-7 h-7"/>
                    <div>
                        <p className="text-blue-900 dark:text-blue-100 font-semibold">Localização</p>
                        <p className="text-blue-800 dark:text-blue-200">MG - Muriaé, Brasil</p>
                    </div>
                </div>
            </div>
            <nav className="flex p-2 gap-2" id="Links">
                <div className="p-2">
                    <a href="https://www.linkedin.com/in/samuel-muzy-fernandes-a19271269/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-10 h-10 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors cursor-pointer"/>
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://github.com/samuelmuzy" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-10 h-10 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors cursor-pointer"/>
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://www.instagram.com/samuelmuzyfernandes/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-10 h-10 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors cursor-pointer"/>
                    </a>
                </div>
            </nav>
        </section>
    )
}