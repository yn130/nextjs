import { API_URL } from "../app/constants";


async function getMovieCredits(id:string) {
    return fetch(`${API_URL}/${id}/credits`).then(response => response.json());
}


export default async function MovieCreditsInfo({id}:{id:string}){
    const credits = await getMovieCredits(id);
    return (
        <div>
            <h1>Credits Info </h1>
            {credits.map((credit) => (
             <li key={credit.id} id={credit.id} >
                <img src={credit.profile_path} alt={credit.name} />
                <div>
                <span>{credit.known_for_department}</span>: <span>{credit.name}</span>
                </div>
                <h6>character: {credit.character}</h6>
              </li>
            ))}
        </div>
    )

}