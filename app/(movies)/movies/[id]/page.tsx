import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getMovies(id:string){
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// export default async function MovieDetails({
//     params:{id},
// } : {
//     params: {id: string};
// }){
//     const movies = await getMovies(id);
//     return <h1> {movies.title} </h1>
// }


async function getMovies(id: string) {
    console.log(`Fetching Movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    console.log(`Fetching Videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}


export default async function MovieDetails({ params }: { params: { id: string } }) {

    const { id } = params;  // 함수 내부에서 구조 분해 할당

    // movie, video 순차적으로 가져오기 
    // const movie = await getMovies(id);
    // const video = await getVideos(id);

    // movie, video 동시에 가져오기(두 데이터 모두 가져와야 return 시작 )
    // const [movie, video] = await Promise.all([getMovies(id), getVideos(id)]);
    
    // return (
    //     <div>
    //     <h1>{movie.title}</h1>
        
    //     </div>
    // ); 


    return <div>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}/>
        </Suspense>

    </div>
}

// next.js 15 버전부터 params 및 searchparams는 promise이므로 값에 접근하려면 async/await 또는 React의 use함수가 필요함 
// export default async function MoviesDetail({ params, searchParams }) {
//     const { id } = await params;
//     console.log('params:', { id });
//     console.log('searchParams:', await searchParams);
//     return <h1> Movie {id} </h1>;
//     }