import React from "react";
import { Popcorn, Martini, Soup } from "lucide-react";
import Card from './Card';
import Title from "../atoms/Title";


function BrowseDoM(){
    return(
        <div className="flex flex-col justify-center items-center">
                <Title className="text-4xl font-bold text-center mb-8 Playfair Display" TextContent="Browse our drinks or meals"/>
                <div className="flex flex-wrap -mx-4 items-center justify-center">
                    <Card title="Meals" description="Discover a wide variety of meals that you can use to guide you and prepare the best meals in the world" icon={<Popcorn size={70} />} />
                    <Card title="Drinks" description="Discover a wide variety of drinks that you can use to guide you and prepare the best drinks in the world" icon={<Martini size={70} />} />
                </div>
            </div>
    );
}

export default BrowseDoM;