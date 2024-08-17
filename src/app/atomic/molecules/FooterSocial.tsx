import React from "react";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import ImageVector from "../atoms/ImageVector";
import Ramen from '../../resources/svg/japanese-food.svg';
import TextContent from "../atoms/TextContent";
import Social from "./Social";

function FooterSocial() {
    return (
        <div className="flex flex-wrap justify-between ">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="flex flex-row gap-3 flex-wrap items-center p-4">
                <Ramen  width="30px" height="30px" className=" text-[#FFFFFF] stroke-[#FFFFFF]"/>
                <TextContent text="Taste & Toast" className="text-sm text-gray-400"/>
                </div>
                
                <TextContent 
                text="In the new era of technology, we look towards the future with certainty and pride for our USFX university" 
                className="text-sm text-gray-400 mb-4"/>
                <Social/>
            </div>
        </div>
    );
}

export default FooterSocial;