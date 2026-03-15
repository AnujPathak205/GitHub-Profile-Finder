import { useState } from "react";
import { getProfile,getRepos } from "../services/githubApi"; 

export default function SearchBar({setData}){
    const [username,setUsername] = useState("");
    const [error,setError] = useState(false);

    async function getData(){
        try{
            const profile = await getProfile(username);
            const repos = await getRepos(username);
            setData(profile,repos);
            setError("");
        }catch(err){
            setError("User not found");
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        getData();
        setUsername("");
    }   


    return (
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row justify-center gap-2 mb-8"
            >
                <input
                    type="text"
                    placeholder="Enter GitHub username" 
                    className="placeholder:text-white px-4 py-2 rounded-md  w-full sm:w-80 border-2 border-indigo-600 "
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-semibold">
                    Search
                </button>
                {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
    );
}