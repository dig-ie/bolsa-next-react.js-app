"use client"
import React from "react";
import { IoIosStats } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import ButtonSmall from "./components/buttonSmall";
import { usePathname } from "next/navigation";


//props do icones, passar aqui as urls dos icones
const FooterIcons = [
    { icon: IoIosStats, alt: "Stats", href: '#' },
    { icon: FaWallet, alt: "Wallet", href: '#' },
    { icon: BiHome, alt: "Home", href: '/mainDashboard' },
    { icon: FaTrophy, alt: "trophy", href: '#' },
    { icon: CgProfile, alt: "CgProfile", href: '#' },
]

const Footer: React.FC = () => {
    const pathname = usePathname();

    return (
        <footer className="bg-[#2ECC71] w-full p-2 ">
            <div>
                <div className="flex flex-row items-center justify-around ">
                    {FooterIcons.map((i, index) => (
                        <ButtonSmall
                            href={i.href}
                            key={index}
                            icon={i.icon}
                            alt={i.alt}
                            isActive={pathname === i.href}
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;

//criar um botão que passe um prop de quando ele tiver ativado passar uma cor ativada
//component do button vai receber uma Image do next/image essa image vai precisa receber um alt
//props do button image Src alt  is active onclick


// Footer
// o footer que ira controlar os active do button so pode ter um botão ativo por vez