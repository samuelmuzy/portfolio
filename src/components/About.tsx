"use client"
import Image from "next/image";
import perfil from "../assets/samuelMuzy.jpg";
import { FaDownload } from "react-icons/fa";
export const About = () => {

    const handleDownload = async () => {
        const response = await fetch('/Currículo-Samuel-Muzy.pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Currículo-Samuel-Muzy.pdf';
        link.click();

        window.URL.revokeObjectURL(url);
    }

    return (
        <section className="h-full flex flex-col items-center justify-center gap-6" id="About">

            <p className="text-4xl font-bold">Sobre mim</p>
            <div className="flex gap-4 justify-center items-center w-full">
                <div className="flex flex-col gap-4 w-1/2">
                    <p className="text-2xl">
                        Olá, sou Samuel, um desenvolvedor full stack com uma paixão por criar soluções tecnológicas que impactam positivamente a vida das pessoas.
                    </p>
                    <p className="text-2xl">
                        Atualmente, estou focado em aprimorar minhas habilidades em desenvolvimento web e mobile, com foco em tecnologias como React, React Native, Node.js, e TypeScript.
                    </p>
                    <button onClick={handleDownload} className="bg-white text-black p-2 rounded-md flex items-center gap-2 w-1/3 justify-center cursor-pointer hover:border-blue-700 hover:text-blue-500 border-2 border-solid">
                        <span>Download CV</span>
                        <FaDownload />
                    </button>
                </div>
            </div>
        </section>
    );
}