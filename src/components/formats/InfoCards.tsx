import {type ReactNode, type FC } from "react";

type InfoCardProps = {
    children?: ReactNode, 
    title? : string, 
    description?: string
}


const InfoCard : FC<InfoCardProps> = ({children} ) => {
    return(
        <div className="flex flex-col items-center bg-[#f3eae0] drop-shadow-md rounded-md w-full h-full p-5 ">
             {children}
        </div>
    )
}

export default InfoCard;