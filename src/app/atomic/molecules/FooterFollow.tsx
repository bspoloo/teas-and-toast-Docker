import React from "react";
import ImageVector from "../atoms/ImageVector";
import TextContent from "../atoms/TextContent";
import Image1 from '../../resources/image/food-meal-1.png';
import Image2 from '../../resources/image/food-meal-2.png';
import Image3 from '../../resources/image/food-meal-3.png';
import Image4 from '../../resources/image/food-meal-4.png';

function FooterFollow() {
    const className = 'border-4 border-gray-400 rounded-xl';
    return (
        <div>
            <TextContent text="Follow Us On Instagram" className="text-gray-400 text-lg font-semibold mb-2"/>
            <div className=" grid grid-cols-2 gap-2">

                <ImageVector url={Image1.src} alt="Food 1" width={170} height={170} classname={className}/>
                <ImageVector url={Image2.src} alt="Food 2" width={170} height={170} classname={className}/>
                <ImageVector url={Image3.src} alt="Food 3" width={170} height={170} classname={className}/>
                <ImageVector url={Image4.src} alt="Food 4" width={170} height={170} classname={className}/>
            </div>
        </div>
    );
}

export default FooterFollow;