import React from "react";
import TextContent from "../atoms/TextContent";
interface TitleProps{
    className: string;
    TextContent: string;
}

function Title({className, TextContent}: TitleProps){
    return(
        <div>
            <h1 className={className} style={{ fontFamily: 'Playfair Display' }}>{TextContent}</h1>
        </div>
    );
}

export default Title