import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import image_holder from "../images/image-holder.png"

const Home: NextPage = () => {
  return (
    <div className=" grow  min-w-full flex flex-col items-center ">
    <Head>
       <title>{`Cedric's Homepage`}</title>
        <meta name="description" content="A websites about Cedric Men" />
       
    </Head>
    
    <div className="min-w-full flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={'https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/22-08-07%2003-36-32%200136.jpg' || image_holder}  alt='' width={300} height={300} className='rounded-md hover:border-2 hover:border-orange-400'></Image>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-r from-[#4B79A1] to-[#283E51] drop-shadow-md rounded-md  min-w-full p-5">
        <article className="text-white p-4 text-xl">
          <h1 className="text-3xl pb-2">Hello! My Name is Cedric Men</h1>
          <text>{`I'm a graduate from UNLV with a BS in Computer Science and previously a Student Assistant 
            in the Smart Home Technology Development Project for`} 
            <Link href='https://www.nihan.care/nihan-team/' className='text-blue-300'> NIHAN.</Link></text>
          <text>{` Currently I am a Software Developer intern at DecentreLabs, the company behind the real estate site `} 
          <Link href="https://www.decentrepx.com" className="text-orange-300">DecentrePX.</Link>{` My web tech stack includes HTML, CSS, Node.js, Next.js, React.js, and Typescript. 
          Alongside these I also have a great understanding
          of C++, Python, and noSQL.`}</text>
        </article>
      </div>
    </div>

    </div>
  );
};

export default Home;
