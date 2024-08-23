import SubTitle from '../atoms/SubTitle';
import Title from '../atoms/Title';
import TexContent from '../atoms/TextContent';
import React from 'react';

type TitleProps = {
    subtitle: string;
    description: string;
}

function CardPresentation({subtitle, description}: TitleProps){
    return(
        <>
            <SubTitle TextContent={subtitle} className='text-xl font-bold mb-2'/>
            <TexContent text={description} className='text-gray-600 mb-4'/>
        </>
    );
}

export default CardPresentation;
