import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
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


// async function getMovies(id: string) {
//     console.log(`Fetching Movies: ${Date.now()}`);
//     await new Promise((resolve) => setTimeout(resolve, 5000)); 
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideos(id: string) {
//     console.log(`Fetching Videos: ${Date.now()}`);
//     await new Promise((resolve) => setTimeout(resolve, 5000)); 
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }


// export default async function MovieDetails({ params }: { params: { id: string } }) {

//     const { id } = params;  // 함수 내부에서 구조 분해 할당

//     // movie, video 순차적으로 가져오기 
//     // const movie = await getMovies(id);
//     // const video = await getVideos(id);

//     // movie, video 동시에 가져오기(두 데이터 모두 가져와야 return 시작 )
//     // const [movie, video] = await Promise.all([getMovies(id), getVideos(id)]);
    
//     // return (
//     //     <div>
//     //     <h1>{movie.title}</h1>
        
//     //     </div>
//     // ); 


//     return <div>
//         <Suspense fallback={<h1>Loading movie videos</h1>}>
//         <MovieVideos id={id} />
//         </Suspense>
//         <Suspense fallback={<h1>Loading movie info</h1>}>
//         <MovieInfo id={id}/>
//         </Suspense>

//     </div>
// }

// next.js 15 버전부터 params 및 searchparams는 promise이므로 값에 접근하려면 async/await 또는 React의 use함수가 필요함 
// export default async function MoviesDetail({ params, searchParams }) {
//     const { id } = await params;
//     console.log('params:', { id });
//     console.log('searchParams:', await searchParams);
//     return <h1> Movie {id} </h1>;
//     }

// interface IParams {
//   params: {id: string}
// }

// export async function generateMetadata({params:{id}} 
//   // 이 오류는 Next.js의 타입 정의와 실제 전달되는 값 사이의 불일치 때문에 발생함. Next.js 15 이후 일부 문서에서는 동적 라우트의 매개변수인 params와 searchParams가 Promise처럼 취급되어야 한다고 언급된 경우가 있지만, 실제로 Next.js는 plain object를 전달함. 
//   // 즉, 타입 정의에서는 params가 Promise처럼 then, catch, finally 등의 메서드를 가진 객체여야 한다고 요구하지만, 실제 전달되는 값은 { id: string }와 같이 단순한 객체이기 때문에 타입 불일치 오류가 발생하는 것
//   // 이 문제는 Next.js의 타입 정의 버그 혹은 문서상의 혼선으로 볼 수 있으며, 현재로서는 명시적 타입 제거로 해당 문제 우회 할 수 있음 
//   // : IParams
// ){

//   const movie = await getMovie(id)

//   return{
//     title:movie.title,
//   }
// }


// export default async function MovieDetails({ params }
//   // : { params: { id: string } }
// ) {
//   const { id } = params;
//   return (
//     <div>
//       <Suspense fallback={<h1>Loading movie info</h1>}>
//         <MovieInfo id={id} />
//       </Suspense>
//       <Suspense fallback={<h1>Loading movie videos</h1>}>
//         <MovieVideos id={id} />
//       </Suspense>
//     </div>
//   );
// }


// 가능한 버전 1
// export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
//   // Promise로 전달된 params를 await로 해제합니다.
//   const resolvedParams = await params;
//   const { id } = resolvedParams;
//   const movie = await getMovie(id);
//   return {
//     title: movie.title,
//   };
// }


// // 타입 문제를 우회하기 위해 인자 타입을 any로 처리합니다.
// export default async function MovieDetails(props: any) {
//   const { id } = props.params;
//   return (
//     <div>
//       <Suspense fallback={<h1>Loading movie info</h1>}>
//         <MovieInfo id={id} />
//       </Suspense>
//       <Suspense fallback={<h1>Loading movie videos</h1>}>
//         <MovieVideos id={id} />
//       </Suspense>
//     </div>
//   );
// }


// 가능한 버전 2
interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: IParams) {
  const { id } = await props.params;
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}


export default async function MovieDetails({ params }
) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
