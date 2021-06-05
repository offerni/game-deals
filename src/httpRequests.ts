export const get = async <T>(
  path: string,
  queryParams: string = ""
): Promise<T> => {
  return await fetch(`${path}?${queryParams}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Http Error: ${response.status}`);
    })
    .catch((err: string) => {
      throw new Error(`Http Error: ${err}`);
    });
};
