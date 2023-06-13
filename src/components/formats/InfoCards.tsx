import { type ReactNode, type FC } from "react";

type InfoCardProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const InfoCard: FC<InfoCardProps> = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-md bg-[#f3eae0] p-5 text-black  drop-shadow-md">
      {children}
    </div>
  );
};

export default InfoCard;
