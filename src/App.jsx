import { useState, useEffect } from 'react';
import { getProfile,getRepos } from './services/githubApi';

import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import Repos from './components/Ropos';

function App() {
  const [profile,setProfile] = useState({});
  const [repos,setRepos] = useState([]);
  const [loading,setLoadingFromApp] = useState(false);
  const [found,setFound] = useState(true);


  function setData(p,r){
    setProfile(p);
    setRepos(r);
  }

  useEffect(() => {
    const loadData = async () => {
      const p = await getProfile("AnujPathak205");
      const r = await getRepos("AnujPathak205");

      setProfile(p);
      setRepos(r);
    }

    loadData();
  },[]);

  return (
      <>
        <div className="min-h-screen bg-black text-white p-4 sm:p-8">
          <SearchBar setData={setData} setLoadingFromApp={setLoadingFromApp}  setFoundFromApp={setFound}/>
          {!loading && found && 
            <div>    
              <Profile profile={profile} />
              <Repos repos={repos} />
            </div>
          }
        </div>
      </>
  )
}

export default App





