import { type ReactNode, type FC } from "react";
import { motion } from "framer-motion";
import { variants, images } from "../../styles/animations";
type InfoCardProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const InfoCard: FC<InfoCardProps> = ({ children }) => {
  return (
    <div className="h-[30vh] w-full transition duration-150  hover:z-10 hover:-translate-y-1 hover:scale-110 hover:ease-in-out">
      <div className="flex h-full w-full flex-col items-center rounded-md bg-[#f3eae0] p-5 text-black drop-shadow-md">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
