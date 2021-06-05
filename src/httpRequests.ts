export const get = async <T>(
  path: string,
  queryParams: string = ""
): Promise<T> => {
  return await fetch(`${path}?${queryParams}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((err: string) => {
      new Error(`Response Error: ${err}`);
    });
};
