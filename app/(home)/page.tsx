// "use client"

import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

// import { useState, useEffect } from "react";

// const URL = "https:///nomad-movies.nomadcoders.workers.dev/movies"

 // React 방법 
// export default function Page(){
//     const [isLoading, setIsLoading] = useState(true);
//     const [movies, setMovies]=useState([]);
//     const getMovies = async() => {
//         const response = await fetch("https:///nomad-movies.nomadcoders.workers.dev/movies");
//         const json = await response.json();
//         setMovies(json);
//         setIsLoading(false);
//     }

//     useEffect(() => {
//         getMovies();
//     }, []);

//     return (
//     <div>
//         { isLoading ? "Loading...":JSON.stringify(movies)}
//     </div>
//     );
// }  


export const metadata = {
    title: "Home",
};



export const API_URL = "https:///nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    // 아래 코드와 같은 기능을 함 
    // const response = await fetch(URL);
    // const json = await response.json();
    // return json;

    //강제로 로딩 만들기 
    // await new Promise((resolve) => setTimeout(resolve, 1000)); 
   return fetch(API_URL).then(response => response.json());
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                // <div key={movie.id}>
                //     <img src={movie.poster_path} alt={movie.title} />
                //     <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                // </div>
                <Movie
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                />
            ))} 
        </div>
    );
}  
