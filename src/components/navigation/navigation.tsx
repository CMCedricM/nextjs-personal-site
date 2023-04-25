import Link from "next/link";

const Navigation = () => {
  const pages: Record<string, string> = {
    Home: "/",
    Photography: "/photography",
    Projects: "/projects",
    Resume:
      "https://docs.google.com/document/d/1M3RgDE2tJpIwMGHA4T71k8XwyzPpBvNbVvZhZV8Nues/edit?usp=sharing",
  };

  return (
    <div className="flex flex-col items-center p-3 text-lg text-white">
      <ul className="flex flex-row items-center gap-4">
        |
        {Object.keys(pages).map((data, index) => {
          return (
            <ul key={index} className="flex flex-row items-center gap-4">
              <li>
                <Link
                  href={pages[data] || ""}
                  className="hover:text-orange-400"
                >
                  {data}
                </Link>
              </li>
              |
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
