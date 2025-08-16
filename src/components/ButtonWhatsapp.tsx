'use client'
import { FaWhatsapp } from "react-icons/fa"

export const ButtonWhatsapp = () =>{
    const sendMessage = () =>{
        const number = "5532984828122";
        const message = "Olá, vi seu portfólio e gostaria de conversar."
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, '_black')
    }
    return(
        <div className="fixed bottom-0 right-0 p-6">
            <button
                className="p-3 cursor-pointer rounded-full shadow-lg  bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white hover:scale-110 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600"
                aria-label="Abrir conversa no WhatsApp"
                onClick={sendMessage}
            >
                <FaWhatsapp className="text-white text-3xl" />
            </button>
        </div>
    )
}