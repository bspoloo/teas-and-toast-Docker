'use client'
import Information from "./Information";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Title from "../molecules/Title";
import Navigation from "../molecules/NavigationMenu";
import LinkMenu from "../atoms/LinkMenu";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <div>
            <div>
                <Information/>
            </div>
            <header className=" flex flex-row justify-around items-center flex-wrap bg-[#d7d7d9]">
                <Title />
                <Navigation className="hidden md:flex flex-row flex-wrap" /> 
                {isOpen && (
                        <Navigation className="md:hidden  flex flex-wrap justify-center bg-[#d7d7d9] "/> 
                    )
                }
                <LinkMenu url="/look" className="hidden lg:block text-textColor-primary hover:bg-[#DBDFD0] border-2 -black rounded-full p-4" title="Look for a meal" />
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-textColor-primary focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>
        </div>
    </>
}

export default Header;