const URL = "https://api.github.com/users/";

export const getProfile = async (user) => {
    const response = await fetch(URL+user);
    if(!response.ok){
        throw new Error("User not found");
    }
    return await response.json();
}

export const getRepos = async (user) => {
    const response = await fetch(URL+user+'/repos');
    return await response.json();
}

