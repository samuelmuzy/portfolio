import Image from "next/image"
import imagemPrincipal from '../assets/IMG_20230901_230437.jpg'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

export const MainSection = () =>{
    return(
        <main id="Home" className="w-full min-h-[85vh] flex flex-col md:flex-row justify-center items-center gap-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 transition-colors duration-300">
            <Image 
                className="w-40 h-40 md:w-60 md:h-60 border-4 border-blue-700 dark:border-blue-400 rounded-full shadow-lg dark:shadow-blue-900 object-cover transition-transform duration-300 hover:scale-105" 
                src={imagemPrincipal} 
                alt="Imagem-principal" 
                priority
            />
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200 drop-shadow dark:drop-shadow-lg">Samuel Muzy Fernandes</h1>
                <p className="text-lg md:text-2xl font-medium text-blue-700 dark:text-blue-300">Desenvolvedor Full Stack</p>
                <nav className="flex gap-2" id="Links">
                <div className="">
                    <a href="https://www.linkedin.com/in/samuel-muzy-fernandes-a19271269/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-10 h-10 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors cursor-pointer"/>
                    </a>
                </div>
                <div className="">
                    <a href="https://github.com/samuelmuzy" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-10 h-10 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors cursor-pointer"/>
                    </a>
                </div>
                <div className="">
                    <a href="https://www.instagram.com/samuelmuzyfernandes/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-10 h-10 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors cursor-pointer"/>
                    </a>
                </div>
            </nav>
            </div>
        </main>
    )
}