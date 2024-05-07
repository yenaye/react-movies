function MovieCard({movie}) {
    return (
        <>
            <div className="m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </a>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {movie.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </>
    )
}

export default MovieCard