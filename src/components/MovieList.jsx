import MovieCard from "./MovieCard"

function MovieList({movies}) {
    return (
        <>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                {
                    movies.map((movie, idx) => 
                        <MovieCard key={idx} movie={movie}/>
                    )
                }
                </div>
            </section>
        </>
    )
}

export default MovieList