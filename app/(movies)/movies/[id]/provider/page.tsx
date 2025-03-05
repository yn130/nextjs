import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import MovieProviders from "../../../../../components/movie-providers";

export default function provider({params}:{params:{id: string} }){
    const {id} = params;
    return(
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie poviders...</h1>}>
                <MovieProviders id={id}/>
            </Suspense>
        </div>

    )

}