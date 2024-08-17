import React from "react";

interface IconProps {
    icon: any;
}

React
function Icon({ icon }: IconProps) {
    return (
        <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            {icon}
        </div>
    );
}

export default Icon;