import React from "react";
import SubTitle from '../atoms/SubTitle'
import TextContent from "../atoms/TextContent";


function TitlePresentation() {
    const clasName = 'text-4xl md:text-5xl font-bold text-center'
    return (
        <div className="space-y-4 mb-14 md:mb-14 lg:mb-12">

            <SubTitle className={clasName} TextContent="Find a lot of"/>
            <SubTitle className={clasName} TextContent="recipes"/>
        
            <TextContent text="Discover delectable cuisine and unforgettable moments" className="text-lg text-center"/>
            <TextContent text="in our welcoming, culinary haven." className="text-lg text-center"/>
        </div>
    );
}

export default TitlePresentation;