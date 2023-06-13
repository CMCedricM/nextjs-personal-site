import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const Navigation = () => {
  const pages: Record<string, string> = {
    Home: "/",
    Photography: "/photography",
    Projects: "/projects",
    Resume:
      "https://docs.google.com/document/d/1M3RgDE2tJpIwMGHA4T71k8XwyzPpBvNbVvZhZV8Nues/edit?usp=sharing",
  };
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="p-lg p-white mt-2 flex flex-col items-center rounded-xl border-2 p-3">
      <ul className="flex flex-row items-center gap-4">
        {Object.keys(pages).map((data, index) => {
          return (
            <ul key={index} className="flex flex-row items-center gap-4">
              <li className="transition duration-150  hover:scale-110 ">
                <Link
                  href={pages[data] || ""}
                  className={`${
                    pathname?.toLowerCase() == `/${data.toLowerCase()}`
                      ? "rounded-full border-2  p-2 "
                      : pathname?.toLowerCase() == "/" &&
                        data.toLowerCase() == "home"
                      ? "rounded-full border-2 p-2"
                      : ""
                  }`}
                >
                  {data}
                </Link>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
