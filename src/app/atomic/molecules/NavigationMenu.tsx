import React from "react";
import LinkMenu from "../atoms/LinkMenu";

function NavigationMenu() {
    const className = ' LinkMenu font-semibold';
    return (
        <>
            <div className=" flex flex-row flex-wrap">
                <LinkMenu className={className} url="/home" title="Home" />
                <LinkMenu className={className} url="/Cocktails" title="Cocktails" />
                <LinkMenu className={className} url="/Meals" title="Meals" />
                <LinkMenu className={className} url="/Search" title="Search" />
            </div>
        </>
    );
}

export default NavigationMenu;