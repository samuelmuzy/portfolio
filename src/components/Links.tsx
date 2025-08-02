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
            <nav id="Links">
                <div>
                    <FaLinkedin/>
                </div>
                <div>
                    <FaGithub/>
                </div>
                <div>
                    <FaInstagram/>
                </div>
            </nav>
        </section>
    )
}