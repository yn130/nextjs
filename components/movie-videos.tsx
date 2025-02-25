import { API_URL } from "../app/(home)/page";


async function getVideos(id: string) {
    console.log(`Fetching Videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    throw new Error('something broke...')
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json();
}

export default async function MovieVideos({id}: {id: string}){
    const video = await getVideos(id); 
    return <h6>{JSON.stringify(video)}</h6>;
}