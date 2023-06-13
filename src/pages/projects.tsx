import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import InfoCard from "../components/formats/InfoCards";

const ProjectsPage: NextPage = () => {
  const [gitHubRepos, setGitHubRepos] = useState([]);
  const [errorMs, setError] = useState("");
  const githubRepoUrl = "https://api.github.com/users/CMCedricM/repos";

  const fetchRepos = () => {
    fetch(githubRepoUrl)
      .then((response) => response.json())
      .then((data) => {
        data?.message ? setError(data?.message) : setGitHubRepos(data);
      });
  };
  console.log(gitHubRepos);
  useEffect(() => fetchRepos(), []);

  return (
    <div className="flex min-h-full min-w-full grow flex-col items-center justify-center">
      <div className="grid-row grid items-center justify-center gap-4 p-5 md:grid-cols-3">
        {gitHubRepos?.length > 0 &&
          gitHubRepos?.map((data: any, index) => {
            return data?.description ? (
              <InfoCard key={index}>
                <div className="p-black flex grow flex-col items-center  p-5 transition duration-150  ease-in-out hover:-translate-y-1 hover:scale-110 ">
                  <h1 className="p-lg font-bold">{data?.name}</h1>
                  <p className="grow p-3">{data?.description}</p>
                  <Link href={data?.html_url}>
                    <Image
                      src={`/github-ico.svg`}
                      alt=""
                      width={40}
                      height={40}
                    ></Image>
                  </Link>
                </div>
              </InfoCard>
            ) : (
              ""
            );
          })}
      </div>

      {!gitHubRepos || gitHubRepos?.length <= 0 || errorMs ? (
        <div className="flex flex-col items-center justify-center p-5">
          {!errorMs ? (
            <h1 className="p-center p-2xl p-white grow items-center">
              Loading...
            </h1>
          ) : (
            <h1 className="p-center p-2xl p-white grow items-center">{`Error Fetching Repos ${
              errorMs ? `: ${errorMs}` : ""
            }`}</h1>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectsPage;
