import React from "react";
import Link from "next/link";

interface LinkMenuProps{
    url: string;
    title: string;
    className: string;
}

function LinkMenu({url, title, className}: LinkMenuProps){
    return(
        <Link href={url} className={className}>{title}</Link>
    );
}

export default LinkMenu;