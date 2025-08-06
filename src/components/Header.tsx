"use client"
import logoHeader from "../assets/image-removebg-preview (8).png"
import Image from 'next/image';
import { NavBar } from "./NavBar";

export const Header = () =>{
    return(
        <header className="w-full flex justify-evenly not-md:justify-between items-center border-b-2 border-blue-200 dark:border-blue-700 p-3 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <Image width={150} height={100} src={logoHeader} alt="LogoHeader"/>
            <NavBar/>
            <nav className="gap-5 hidden md:flex">
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#About">About</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Projects">Projects</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Links">Links</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Emails">Emails</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Technologies">Tecnologias</a>
            </nav>
        </header>
    );
}        