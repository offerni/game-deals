import { APIStore } from "api";

export const getStoresInfo = async (): Promise<APIStore[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  return await fetch(`${apiUrl}/stores`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};
