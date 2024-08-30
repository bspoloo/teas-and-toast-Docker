import React from "react";
import LinkMenu from "../atoms/LinkMenu";

function NavigationMenu({ className, linkStyle}: { className: string, linkStyle?: string }) {
    const defaultLinkStyle = "LinkMenu font-semibold";
    return (
        <>
            <div className={`${className}`}>
                <LinkMenu className={`${defaultLinkStyle} ${linkStyle}`} url="/" title="Home" />
                <LinkMenu className={`${defaultLinkStyle} ${linkStyle}`} url="/cocktails" title="Cocktails" />
                <LinkMenu className={`${defaultLinkStyle} ${linkStyle}`} url="/meals" title="Meals" />
                <LinkMenu className={`${defaultLinkStyle} ${linkStyle}`} url="/meals/countries" title="Meals by Country" />
                <LinkMenu className={`${defaultLinkStyle} ${linkStyle}`} url="/search" title="Search" />
            </div>
        </>
    );
}

export default NavigationMenu;