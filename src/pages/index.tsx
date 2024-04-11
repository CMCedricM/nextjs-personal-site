import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import image_holder from "../images/image-holder.png";

const Home: NextPage = () => {
  return (
    <div className=" flex  min-w-full grow flex-col items-center ">
      <Head>
        <title>{`Cedric's Homepage`}</title>
        <meta name="description" content="A websites about Cedric Men" />
      </Head>

      <div className="flex min-w-full flex-col items-center justify-center gap-4">
        <div>
          <Image
            src={
              "https://filedn.com/lzwabVT0BiwB0zLQ0LYrokb/Photos/22-08-07%2003-36-32%200136.jpg" ||
              image_holder
            }
            alt=""
            width={300}
            height={300}
            className="rounded-md hover:border-2 hover:border-orange-400"
          ></Image>
        </div>
        <div className="flex min-w-full flex-col items-center rounded-md bg-gradient-to-r from-[#4B79A1] to-[#283E51]  p-5 drop-shadow-md">
          <article className="p-white p-xl p-4">
            <h1 className="p-3xl pb-2 text-2xl">
              {"Hello! My Name is Cedric Men,"}
            </h1>
            <p>
              {`I'm a graduate from UNLV with a BS in Computer Science and previously a Developer
            in the Smart Home Technology Development Project for`}
              <Link
                href="https://www.nihan.care/nihan-team/"
                className="p-blue-300"
              >
                {" "}
                NIHAN.
              </Link>
            </p>
            <p>
              Currently {"I'm"} a Software Developer at{" "}
              {
                <Link
                  href="https://www.decentrelabs.com/"
                  className="p-orange-300"
                >
                  DecentreLabs
                </Link>
              }
              , the company behind the real estate site
              <Link href="https://www.nexusmls.io"> NexusMLS.</Link>
              {` My web tech stack includes HTML, CSS, Node.js, Next.js, React.js, and Typescript. 
          Alongside these I also have a great understanding
          of C++, Python, and noSQL.`}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
