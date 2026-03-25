import { useState } from "react";
import { getProfile,getRepos } from "../services/githubApi"; 

export default function SearchBar({setData,setLoadingFromApp,setFoundFromApp}){
    const [username,setUsername] = useState("");
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    async function getData(){
        try{
            setLoading(true);
            setLoadingFromApp(true);
            setFoundFromApp(true);
            const profile = await getProfile(username);
            const repos = await getRepos(username);
            setData(profile,repos);
            setError("");
        }catch(err){
            setError("User not found");
            setFoundFromApp(false);
        }finally{
            setLoading(false);
            setLoadingFromApp(false);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        getData();
        setUsername("");
    }   


    return (
        <>
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

                <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-semibold" disabled={loading}>
                    Search
                </button>
            </form>
            <div className="flex justify-center mt-2 mb-2">
                {error && (
                    <div className="w-full max-w-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center shadow-sm">
                        {error}
                    </div>
                )}
            </div>  
            {loading  && (
                <div className="flex justify-center items-center h-40">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) }
        </>
    );
}