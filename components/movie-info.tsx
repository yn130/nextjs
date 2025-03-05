


// async function getMovies(id: string) {
//     console.log(`Fetching Movies: ${Date.now()}`);
//     await new Promise((resolve) => setTimeout(resolve, 3000)); 
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// export default async function MovieInfo( {id}: {id: string}){
//     const movie = await getMovies(id); 
//     return <h6>{JSON.stringify(movie)}</h6>;
// }

import { API_URL } from "../app/constants";
import potato from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={`/movies/${movie.id}/credits`} target={"_blank"}>
          Credits Info &rarr;
        </a>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}