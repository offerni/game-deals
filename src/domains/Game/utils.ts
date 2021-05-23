import { APIGameLookup, APIGamesList } from "api";

// @@todo: transform options into object and dinamically build the query params
export const getGamesByTitle = async (
  title: string,
  options: string = ""
): Promise<APIGamesList[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

  return await fetch(`${apiUrl}/games?title=${title}&${options}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
    }
  );
};

export const getGameById = async (id: string): Promise<APIGameLookup> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

  return await fetch(`${apiUrl}/games?id=${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};
