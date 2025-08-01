"use client"
import logoHeader from "../assets/image-removebg-preview (8).png"
import Image from 'next/image';

export const Header = () =>{
    return(
        <header className="w-full flex justify-evenly border-b-1 p-3 items-center">
            <Image width={150} height={100} src={logoHeader} alt="LogoHeader"/>
            <nav className="flex gap-5">
                <a href="#About">About</a>
                <a href="#Projects">Projects</a>
                <a href="#Links">Links</a>
                <a href="#Emails">Emails</a>
                <a href="#Technologies">Tecnologias</a>
            </nav>
        </header>
    );
} 