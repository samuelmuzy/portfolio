"use client"
import { useEffect, useState } from "react"

export const Header = () =>{
    const [scrolled, setScrolled] = useState<boolean>(false)

    /*useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
*/
    return(
        <header className="w-full flex justify-evenly border-b-1 p-3 items-center">
            <img src="s" alt="LogoHeader" />
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