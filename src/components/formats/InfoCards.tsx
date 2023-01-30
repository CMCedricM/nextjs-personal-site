import {type ReactNode, type FC } from "react";

type InfoCardProps = {
    children?: ReactNode, 
    title? : string, 
    description?: string
}


const InfoCard : FC<InfoCardProps> = ({children} ) => {
    return(
        <div className="flex flex-col items-center bg-[#f3eae0] drop-shadow-md rounded-md w-full h-full p-5 hover:border-2 hover:border-orange-400">
             {children}
        </div>
    )
}

export default InfoCard;