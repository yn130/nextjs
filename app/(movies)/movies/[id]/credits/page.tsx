import { Suspense } from "react";
import MovieCreditsInfo from "../../../../../components/movie-credits";
import { API_URL } from "../../../../constants";

async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  }




export default async function Credits({ params: {id} }: { params: { id: string } }) {
    // const {id} = params; 
    const movie = await getMovie(id);

    return (
        <div>
            <Suspense fallback={<h1>Loading Movie poster info...</h1>}>
            <h1>{movie.title}</h1>
            <img src={movie.poster_path} alt={movie.title}/> 
            </Suspense>
            <Suspense fallback={<h1>Loading credits info...</h1>}>
                <MovieCreditsInfo id={id}/>
            </Suspense>
        </div>
    )
}