import React from "react";
import ImageVector from "../atoms/ImageVector";
import Wait from '../../resources/image/wait.png'
import LinkMenu from "../atoms/LinkMenu";
import Title from "../atoms/Title";

const Card = () => {
    return (
        <div className=" flex flex-col border border-gray-200 rounded-lg  text-center p-6 gap-10 mr-5 ml-5">
            <ImageVector url={Wait.src} alt="Wait please" width={500} height={500} classname="" />
            <Title TextContent="Wait moment please" className="font-semibold text-[2.1rem]" />
            <LinkMenu url="/" title="Go back the home" className="text-red-600 font-bold hover:bg-red-100 px-4 py-2 rounded-lg" />
        </div>
    )
}

export default Card;