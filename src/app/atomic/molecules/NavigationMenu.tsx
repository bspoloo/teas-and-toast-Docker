import React from "react";
import LinkMenu from "../atoms/LinkMenu";

function NavigationMenu() {
    const className = ' LinkMenu font-semibold';
    return (
        <>
            <div className=" flex flex-row flex-wrap">
                <LinkMenu className={className} url="/" title="Home" />
                <LinkMenu className={className} url="/cocktails" title="Cocktails" />
                <LinkMenu className={className} url="/meals" title="Meals" />
                <LinkMenu className={className} url="/search" title="Search" />
            </div>
        </>
    );
}

export default NavigationMenu;