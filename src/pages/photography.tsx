import { type NextPage } from "next";
import Image from "next/image";
import image_holder from "../images/image-holder.png";

type imageType = Record<string, string>;

const Photography: NextPage = () => {
  const imgURL: imageType = {
    "Airplane-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0113.JPG",
    "Frozen-Falls-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_2377.JPG",
    "Sunset-House-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_1756.JPG",
    "Sunrise-Beach-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0192_Original.jpg",
    "Zen-Garden-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0259.JPG",
    "Vegas-Strip-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0340_Original.jpg",
    "Sunset-Beach-1-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0568(1)_Original.jpg",
    "Rock-Castle-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0569(1)_Original.jpg",
    "Normal-Sea":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0634(2)_Original.jpg",
    "Sunset-Walk-Photo":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0570(1)_Original.jpg",
    "Night-of-the-church":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_2392.JPG",
    "Splitting-Lake":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_1507.JPG",
    "Trophy-Garden":
      "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_3493_Original.jpg",
  };

  return (
    <div className="flex min-h-full min-w-full grow flex-col items-center justify-center">
      <div className=" relative grid grow grid-rows-1 items-center justify-center gap-5 p-5 md:grid-cols-4">
        {Object.keys(imgURL)?.map((data: string, index) => {
          return (
            <div key={index} className="flex grow flex-col">
              <Image
                src={imgURL[data] || image_holder}
                alt=""
                width={300}
                height={225}
                placeholder="blur"
                blurDataURL="/images/image-holder.png"
                className="rounded-md transition duration-150  ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-2 hover:border-orange-400"
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photography;
