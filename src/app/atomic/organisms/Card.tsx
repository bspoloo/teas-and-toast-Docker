import React from "react";
import ImageVector from "../atoms/ImageVector";
import Icon from '../atoms/Icon';
import Description from '../molecules/Description';
import LinkMenu from "../atoms/LinkMenu";

interface cardProps{
    title: string;
    description: string;
    icon: any
}

const Card = ({ title, description, icon }: cardProps) => {
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
                <Description icon={icon} title={title} description={description}/>
                <LinkMenu url="/Meals" title="Explore the Menu" className="text-red-600 font-bold hover:bg-red-100 px-4 py-2 rounded-lg"/>
            </div>
        </div>
    )
}

export default Card;