import React from "react";
import ImageVector from "../atoms/ImageVector";
import Search from '../../resources/image/searching.png'
import LinkMenu from "../atoms/LinkMenu";
import Title from "../atoms/Title";

const Searching = () => {
    return (
        <div className=" flex flex-col border border-gray-200 rounded-lg  text-center p-6 gap-10 mr-5 ml-5 bg-[#F9F9F7] items-center justify-center">
            <ImageVector url={Search.src} alt="Wait please" width={430} height={420} classname="" />
            <Title TextContent="We are searching you meal or cocktail" className="font-semibold text-[2.1rem]" />
        </div>
    )
}
export default Searching;