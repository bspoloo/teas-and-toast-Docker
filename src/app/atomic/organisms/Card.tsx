import React from "react";

interface cardProps{
    title: string;
    description: string;
    icon: any
}

const Card = ({ title, description, icon }: cardProps) => {
    return (
        <div className="w-full md:w-1/2 p-4">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    {icon}
                </div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <a href="#" className="text-red-600 font-bold">Explore Menu</a>
            </div>
        </div>
    )
}

export default Card;