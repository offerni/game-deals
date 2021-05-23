import {
  APIGameLookup,
  APIGamesList,
  APIGamesQueryParams,
  buildQueryParams,
} from "api";

export const getGamesByTitle = async (
  title: string,
  options: APIGamesQueryParams = {}
): Promise<APIGamesList[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

  return await fetch(
    `${apiUrl}/games?title=${title}&${buildQueryParams<APIGamesQueryParams>(
      options
    )}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};

export const getGameById = async (id: string): Promise<APIGameLookup> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

  return await fetch(`${apiUrl}/games?id=${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};
