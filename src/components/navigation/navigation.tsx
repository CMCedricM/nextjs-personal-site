import Link from "next/link";

const Navigation = () => {


    const pages : Record <string,string> = {
        'Home' : '/', 
        'Photography' : '/photography', 
        'Projects' : '/projects',
        'Resume' : 'https://drive.google.com/file/d/1n2F9qLDL1MELNk3SAnHzbkKXICQXglcA/view?usp=sharing'

    }

    return(
        <div className="flex flex-col items-center text-white text-lg p-3">
            <ul className="flex flex-row items-center gap-4">
                |{
                    Object.keys(pages).map((data, index) => {
                        return(
                                <ul key={index} className='flex flex-row items-center gap-4'>
                                    <li>
                                        <Link href={pages[data] || '' } className='hover:text-orange-400'>{data}</Link>
                                    </li>|
                                </ul>
                       
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Navigation;
