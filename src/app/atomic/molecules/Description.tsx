import React from "react";
import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import TextContent from "../atoms/TextContent";

interface descriptionProps {
    icon: any;
    title: string;
    description: string;
}

function Description({icon, title, description}: descriptionProps){
    return(
        <div>
                <Icon icon={icon}/>
                <Title className={"text-xl font-bold mb-2"} TextContent={title}/>
                <TextContent className={'text-gray-600 mb-4'} text={description}/>
        </div>
    );
}

export default Description;