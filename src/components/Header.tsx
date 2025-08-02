"use client"
import logoHeader from "../assets/image-removebg-preview (8).png"
import Image from 'next/image';

export const Header = () =>{
    return(
        <header className="w-full flex justify-evenly border-b-1 p-3 items-center">
            <Image width={150} height={100} src={logoHeader} alt="LogoHeader"/>
            <nav className="flex gap-5">
                <a className="border-b-2 border-black hover:border-b-2 hover:border-blue-700" href="#About">About</a>
                <a className="border-b-2 border-black hover:border-b-2 hover:border-blue-700" href="#Projects">Projects</a>
                <a className="border-b-2 border-black hover:border-b-2 hover:border-blue-700" href="#Links">Links</a>
                <a className="border-b-2 border-black hover:border-b-2 hover:border-blue-700" href="#Emails">Emails</a>
                <a className="border-b-2 border-black hover:border-b-2 hover:border-blue-700" href="#Technologies">Tecnologias</a>
            </nav>
        </header>
    );
} 