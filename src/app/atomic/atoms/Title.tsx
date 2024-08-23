import React from "react";
import TextContent from "../atoms/TextContent";
interface TitleProps{
    className?: string;
    TextContent: string;
}

function Title({className, TextContent}: TitleProps){
    console.log("título " +TextContent)
    return(
        <div className={className}>
            <h1 style={{ fontFamily: 'Playfair Display' }}>{TextContent}</h1>
        </div>
    );
}

export default Title