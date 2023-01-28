import Link from "next/link";

const Navigation = () => {
    return(
        <div className="flex flex-col items-center text-white text-lg">
            <ul className="flex flex-row items-center gap-5 p-4 ">
                |<li><Link href='/' className="hover:text-orange-400">Home</Link></li>|
                <li><Link href='/photography' className="hover:text-orange-400" >Photography</Link></li>|
                <li><Link href='/projects' className="hover:text-orange-400">Projects</Link></li>|
            </ul>
        </div>
    )
}


export default Navigation;
