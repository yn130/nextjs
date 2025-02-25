import { API_URL } from "../app/(home)/page";


async function getMovies(id: string) {
    console.log(`Fetching Movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo( {id}: {id: string}){
    const movie = await getMovies(id); 
    return <h6>{JSON.stringify(movie)}</h6>;
}