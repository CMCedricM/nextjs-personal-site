import Link from "next/link";

const FooterNote = () => {
    return(
        <div className="text-white p-5 gap-5 min-w-full flex flex-row md:flex-col items-center bg-[#020c14] md:absolute md:bottom-0 ">
           
            
            <div className="flex flex-col gap-4 items-center min-w-full p-4">
            <div>
                <text className="text-2xl text-center">Contact</text>
            </div>
               <ul className="min-w-full text-center text-lg flex flex-col md:flex-row items-stretch gap-4">
                <li className="basis-1/3">
                    <ul>Email
                        <li className="p-3">
                            <Link href='mailto:c.m.cedricm17@gmail.com' className="hover:text-orange-400">c.m.cedricm17@gmail.com</Link>
                        </li>
                    </ul>
                </li>
                <li className="basis-1/3">
                    <ul>Github
                        <li className="p-3">
                            <Link href='https://github.com/CMCedricM'  className="hover:text-orange-400">@CMCedricm</Link>
                        </li>
                    </ul>
                </li>

                <li className="basis-1/3">
                    <ul>Instagram
                        <li className="p-3">
                            <Link href='https://www.instagram.com/cm015/' className="hover:text-orange-400">@CM015</Link>
                        </li>
                    </ul>
                </li>
               </ul>
            </div>
            


        </div>
    )
}

export default FooterNote;