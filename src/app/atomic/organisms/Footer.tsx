import React from "react";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import FooterSocial from '@/app/atomic/molecules/FooterSocial';
import FooterPages from '@/app/atomic/molecules/FooterPages';
import FooterFollow from '@/app/atomic/molecules/FooterFollow'
import TextContent from "../atoms/TextContent";

const Footer = () => {
    return (
        <footer className="bg-[#474747] text-white py-8 px-4">

            <div className="container mx-auto flex flex-wrap justify-around ">
                <FooterSocial/>
                <FooterPages/>
                <FooterFollow/>
            </div>
            <TextContent text=" Copyright © 2024 Osmar & Polo. All Rights Reserved" className="text-center mt-8 text-sm text-gray-400"/>
        </footer>
    );
}
export default Footer;