import React from "react";
import ImageVector from "../atoms/ImageVector";
import error from '../../resources/image/not found.png'
import LinkMenu from "../atoms/LinkMenu";
import Title from "../atoms/Title";

const NotFound = () => {
    return (
        <div className=" flex flex-col border border-gray-200 rounded-lg  text-center p-6 gap-10 mr-5 ml-5 bg-[#F9F9F7] items-center justify-center">
            <ImageVector url={error.src} alt="Wait please" width={300} height={300} classname="" />
            <Title TextContent="Error to find this ingredient" className="font-semibold text-[2.1rem]" />
            <LinkMenu url="/" title="Go back the home" className="text-red-600 font-bold hover:bg-red-100 px-4 py-2 rounded-lg" />
        </div>
    )
}

export default NotFound;