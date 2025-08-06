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
        <section className="h-full flex flex-col items-center justify-center gap-4 md:gap-6 px-4 md:px-0 mt-16 mb-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 rounded-2xl  p-8">
            <p className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-200 drop-shadow">Sobre mim</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
                    <p className="text-lg md:text-2xl text-center md:text-left leading-relaxed text-blue-900 dark:text-blue-100">
                        Olá, sou Samuel, um desenvolvedor full stack com uma paixão por criar soluções tecnológicas que impactam positivamente a vida das pessoas.
                    </p>
                    <p className="text-lg md:text-2xl text-center md:text-left leading-relaxed text-blue-900 dark:text-blue-100">
                        Atualmente, estou focado em aprimorar minhas habilidades em desenvolvimento web e mobile, com foco em tecnologias como React, React Native, Node.js, e TypeScript.
                    </p>
                    <button onClick={handleDownload} className="bg-blue-600 dark:bg-blue-500 text-white p-3 md:p-2 rounded-md flex items-center gap-2 w-full md:w-1/3 justify-center cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-400 border-2 border-blue-700 dark:border-blue-400 mx-auto md:mx-0 transition-colors duration-200 shadow">
                        <span>Download CV</span>
                        <FaDownload />
                    </button>
                </div>
            </div>
        </section>
    );
}