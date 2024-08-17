import React from "react";
import TextContent from "../atoms/TextContent";
import LinkMenu from "../atoms/LinkMenu";

function FooterPages() {
    const clasName = 'text-gray-400 hover:text-white';
    return (
        <div className="flex flex-col w-full md:w-1/4 mb-6 md:mb-0">
            <TextContent className="text-lg text-gray-400 font-semibold mb-2" text="Pages"/>
            <ul className="text-sm">
                <li><LinkMenu url="/" title="Home" className={clasName}/></li>
                <li><LinkMenu url="/Cocktails" title="Cocktails" className={clasName}/></li>
                <li><LinkMenu url="/Meals" title="Meals" className={clasName}/></li>
                <li><LinkMenu url="/Search" title="Search" className={clasName}/></li>
            </ul>
        </div>

    );
}

export default FooterPages;