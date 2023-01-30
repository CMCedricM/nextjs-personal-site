import { type NextPage } from "next";
import { useEffect, useState } from "react";


const ProjectsPage : NextPage = () => {
    
    const [gitHubRepos, setGitHubRepos] = useState([]); 
    const githubRepoUrl  = "https://api.github.com/users/CMCedricM/repos"

    
    const fetchRepos = () => {
        fetch(githubRepoUrl).then((response) => response.json()).then((data) => {setGitHubRepos(data)})
    }

    useEffect(() => fetchRepos(), []); 

    return(
        <div className="min-w-full min-h-full grow flex flex-col items-center justify-center">
             <p className="text-2xl text-white">This page is still under construction!</p>
            <div className="grid grid-row md:grid-cols-3 gap-4 justify-center items-center">
            {gitHubRepos && 
                gitHubRepos?.map((data : any, index) => {
                    return (
                    <div key={index}>
                        <div className="flex flex-col items-center p-5 text-white">
                            <h1>{data?.name}</h1>
                            <p>{data?.description}</p>
                            <p>{`Last Updated: ${data?.updated_at}`}</p>
                        </div>
                </div>)
        })}
            </div>
               
        </div>
    )
}


export default ProjectsPage;