export default function Repos({repos}){
    return(
        <div className="max-w-4xl mx-auto mt-10">

        <h2 className="text-xl font-bold mb-6 text-blue-400">
          Repositories
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">

          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-zinc-900 p-4 rounded-lg shadow hover:shadow-blue-500/20 transition"
            >

              <h3 className="text-lg font-semibold text-blue-400">
                {repo.name}
              </h3>

              <p className="text-sm text-gray-400">
                <b>Language:</b> {repo.language}
              </p>

              <p className="text-gray-300 text-sm mt-1">
                {repo.description}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                className="inline-block mt-2 text-blue-500 hover:underline"
              >
                View Repository →
              </a>

            </div>
          ))}

        </div>

      </div>
    );
}