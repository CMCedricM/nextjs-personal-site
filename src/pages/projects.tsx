import { type NextPage } from "next";
import { useEffect, useState } from "react";

import InfoCard from "../components/formats/InfoCards";


const ProjectsPage : NextPage = () => {
    
    const [gitHubRepos, setGitHubRepos] = useState([]); 
    const [errorMs, setError] = useState('')
    const githubRepoUrl  = "https://api.github.com/users/CMCedricM/repos"

    
    const fetchRepos = () => {
        fetch(githubRepoUrl).then((response) => response.json()).then((data) => {data?.message ? setError(data?.message) : setGitHubRepos(data)})
    }

    useEffect(() => fetchRepos(), []); 

    return(
        <div className="min-w-full min-h-full grow flex flex-col items-center justify-center">
            <div className="grid grid-row md:grid-cols-3 gap-4 justify-center items-center p-5">
                {gitHubRepos?.length > 0 && 
                    gitHubRepos?.map((data : any, index) => {
                        return (
                        data?.description ? 
                        <InfoCard key={index}>
                            <div className="grow flex flex-col items-center p-5  text-black">
                                <h1 className="text-lg font-bold">{data?.name}</h1>
                                <p className="grow p-3">{data?.description}</p>
                                <p className="grow p-3">{`Last Updated: ${data?.updated_at}`}</p>
                            </div>
                    </InfoCard> : '')
                })}
            </div>
        
        { !gitHubRepos || gitHubRepos?.length <= 0 || errorMs ?
            <div className="flex flex-col justify-center items-center p-5">
                {!errorMs  ? <h1 className= "grow text-2xl text-white text-center items-center">Loading...</h1> : <h1 className= "grow text-2xl text-white text-center items-center">{`Error Fetching Repos ${errorMs ? `: ${errorMs}` : ''}`}</h1>}
            </div> : ''}
            
               
        </div>
    )
}


export default ProjectsPage;