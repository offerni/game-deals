import { APIDealsList, APIDealLookup } from "api";

export const getDeals = async (options: string): Promise<APIDealsList[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  return await fetch(`${apiUrl}/deals?${options}`).then(
    // @@todo: add options to the query
    (response) => {
      if (response.ok) {
        return response.json();
      }
    }
  );
};

export const getDealById = async (id: string): Promise<APIDealLookup> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  return await fetch(`${apiUrl}/deals?id=${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};
