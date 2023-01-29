import { type NextPage } from "next";
import Image from "next/image";
import image_holder from "../images/image-holder.png"


const Photography : NextPage = () => {
    
    const imgURL : Record<string,string> = 
        {
            'Airplane-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0113.JPG',
            'Frozen-Falls-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_2377.JPG', 
            'Sunset-House-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_1756.JPG',
            'Sunrise-Beach-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0192_Original.jpg',
            'Zen-Garden-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0259.JPG', 
            'Vegas-Strip-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0340_Original.jpg', 
            'Sunset-Beach-1-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0568(1)_Original.jpg', 
            'Rock-Castle-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0569(1)_Original.jpg', 
            'Sunset-Walk-Photo' : 'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/IMG_0570(1)_Original.jpg'

        }
    
    return(
        <div className="grow min-w-full min-h-full flex flex-col items-center"> 
           
           <div className="min-w-full flex flex-col gap-5 p-5">
            <div className="min-w-full min-h-min flex flex-col md:flex-row gap-5 items-center justify-center rounded-md">
                    <Image src={imgURL['Airplane-Photo'] || image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
                    <Image src={imgURL['Frozen-Falls-Photo'] || image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
                    <Image src={imgURL['Sunset-House-Photo'] || image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
            </div>
            <div className="min-w-full flex flex-col md:flex-row gap-5 items-center justify-center">
                    <Image src={imgURL[ 'Sunrise-Beach-Photo'] || image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
                    <Image src={imgURL['Vegas-Strip-Photo'] ||image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
                    <Image src={imgURL['Zen-Garden-Photo'] || image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
            </div>

            <div className="min-w-full flex flex-col md:flex-row gap-5 items-center justify-center">
                    <Image src={imgURL[ 'Sunset-Beach-1-Photo'] || image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
                    <Image src={imgURL['Rock-Castle-Photo'] ||image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
                    <Image src={imgURL['Sunset-Walk-Photo'] || image_holder} alt='' width={300} height={225} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
            </div>


           </div>


        </div>
    )
}

export default Photography;