import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"

export const Links = () => {
    return (
        <section className="w-full h-full flex flex-col items-center justify-between border-2 border-amber-600">
            <p className="text-4xl">Entre em contato</p>

            <div className="flex flex-col self-start w-full ">
                <div className="flex border-2 border-amber-400 items-center gap-4 p-5">
                    <FiPhone/>
                    <div>
                        <p>telefone</p>
                        <p>+55 (32) 984828122</p>
                    </div>
                </div>
                <div className="flex border-2 border-amber-400 items-center gap-4 p-5">
                    <FiMail/>
                    <div>
                        <p>Email</p>
                        <p>samuelmuzyfernandes4@gmail.com</p>
                    </div>
                </div>
                <div className="flex border-2 border-amber-400 items-center gap-4 p-5">
                    <FiMapPin/>
                    <div>
                        <p>Localização</p>
                        <p>MG - Muriaé ,Brasil</p>
                    </div>
                </div>
            </div>
            <p className="text-4xl">Entre em contato</p>
            <nav className="flex p-2" id="Links">
                <div className="p-4">
                    <a href="https://www.linkedin.com/in/samuel-muzy-fernandes-a19271269/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-10 h-10 hover:text-blue-700 cursor-pointer"/>
                    </a>
                </div>
                <div className="p-4">
                    <a href="https://github.com/samuelmuzy" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-10 h-10 hover:text-blue-700 cursor-pointer"/>
                    </a>
                </div>
                <div className="p-4">
                    <a href="https://www.instagram.com/samuelmuzyfernandes/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-10 h-10 hover:text-blue-700 cursor-pointer"/>
                    </a>
                </div>
            </nav>
        </section>
    )
}