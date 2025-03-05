import { API_URL } from "../app/constants";

async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
    const providers = await getProviders(id); 
    return (
        <div>
          <h1>Movie Providers</h1>
          {Object.keys(providers).map((provider_id) => (
            <div key={provider_id}>
                
              <h4> Buy Provider List</h4>
              <ul>
                {providers[provider_id].buy?.map((provider: any) => (
                  <li key={provider.provider_id}>
                    <span>
                    {provider.provider_name}
                    <img src={provider.logo_path} alt={provider.platform} />
                    </span>
                  </li>
                ))}
              </ul>
    
              <h4> Rent Provider List</h4>
              <ul>
                {providers[provider_id].rent?.map((provider: any) => (
                  <li key={provider.provider_id}>{provider.provider_name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    );
}