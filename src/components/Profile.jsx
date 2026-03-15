export default function Profile({profile}){
    return (
        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center">

            <img
                src={profile.avatar_url}
                alt="avatar"
                className="w-32 h-32 rounded-full border-4 border-blue-600"
            />

            <div className="text-center md:text-left">

                <h1 className="text-2xl font-bold">
                    {profile.name}
                </h1>

                <p className="text-gray-400">
                    @{profile.login}
                </p>

                <p className="mt-2 text-gray-300">
                    {profile.bio}
                </p>

                <p className="mt-2">
                    📍 {profile.location}
                </p>

                <div className="flex justify-center md:justify-start gap-6 mt-3 text-sm">

                    <p>
                    Repos:
                    <span className="text-blue-400 ml-1">
                        {profile.public_repos}
                    </span>
                    </p>

                    <p>
                    Followers:
                    <span className="text-blue-400 ml-1">
                        {profile.followers}
                    </span>
                    </p>

                    <p>
                    Following:
                    <span className="text-blue-400 ml-1">
                        {profile.following}
                    </span>
                    </p>

                </div>

                <a
                    href={profile.html_url}
                    target="_blank"
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                >
                    View GitHub Profile
                </a>

            </div>
      </div>
    );
}