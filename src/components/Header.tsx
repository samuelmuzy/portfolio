"use client"
import React, { useState, useEffect } from 'react';
import logoHeader from "../assets/logo.png"
import Image from 'next/image';
import { NavBar } from "./NavBar";
import {Switch} from './Toggle';

export const Header = () =>{
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > 50) { 
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={`w-full flex justify-evenly not-md:justify-between items-center border-b-2 border-blue-200 dark:border-blue-700 p-3 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-300 sticky top-0 z-50 ${isShrunk ? 'h-16' : 'h-24'}`}>
            <Image width={isShrunk ? 90 : 130} height={isShrunk ? 60 : 90} src={logoHeader} alt="LogoHeader" className="transition-all duration-300"/>
            <NavBar/>
            <nav className="gap-5 hidden md:flex">
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#About">About</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Projects">Projects</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Contatos">Links</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Emails">Emails</a>
                <a className="border-b-2 border-transparent hover:border-blue-700 text-blue-900 dark:text-blue-200 font-semibold transition-colors" href="#Technologies">Tecnologias</a>
            </nav>
            <div className='hidden md:flex'>
                <Switch/>
            </div>
        </header>
    );
}        