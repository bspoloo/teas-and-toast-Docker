import React from "react";
interface TitleProps{
    className: string;
    TextContent: string;
}

function Title({className, TextContent}: TitleProps){
    return(
        <div>
            <h2 className={className} style={{ fontFamily: 'Playfair Display' }}>{TextContent}</h2>
        </div>
    );
}

export default Title