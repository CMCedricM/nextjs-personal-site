import { ReactNode, FC } from "react";

type InfoCardProps = {
    children?: ReactNode, 
    title? : string, 
    description?: string
}


const InfoCard : FC<InfoCardProps> = ({children, title, description} ) => {
    return(
        <div className="flex flex-col items-center bg-white drop-shadow-md rounded-md w-full h-full p-5">
             <h1>{title}</h1>
             {children}
        </div>
    )
}

export default InfoCard;