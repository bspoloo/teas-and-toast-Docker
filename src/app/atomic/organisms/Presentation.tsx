import React from "react";
import LinkMenu from "../atoms/LinkMenu";
import SubTitle from "../atoms/SubTitle";
import TitlePresentation from "../molecules/TitlePresentation";

function Presentation() {
    const clasName = 'rounded-full font-bold p-4 border-2 border-[#2C2F24] text-[#2C2F24] hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E]';
    return (
        <div className=" inset-0 flex items-center flex-col">
            <TitlePresentation />
            <div className="flex flex-row flex-wrap gap-x-10 self-center justify-center items-center gap-6">
                <LinkMenu url="/Meals" title="Look for a meal" className={clasName} />
                <LinkMenu url="/Explore" title="Explore meals" className={clasName} />
            </div>
        </div>
    );
}

export default Presentation;