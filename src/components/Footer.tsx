import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-blue-600 flex flex-col items-center justify-center p-7 gap-6">
            <div className="flex gap-7">
                <div>
                    <a href="https://www.linkedin.com/in/samuel-muzy-fernandes-a19271269/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-10 h-10 hover:text-blue-700 cursor-pointer"/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/samuelmuzy" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-10 h-10 hover:text-blue-700 cursor-pointer"/>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/samuelmuzyfernandes/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-10 h-10 hover:text-blue-700 cursor-pointer"/>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p>Made with by Samuel Muzy Fernandes</p>
                <p>All rights reserved © 2025.</p>
            </div>
        </footer>
    )
}