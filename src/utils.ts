export const PAGE_SIZE = 60;
export const PATHS = {
  deals: "/deals",
  free: "/giveaways",
  recent: "/recent",
  games: "/games",
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function buildQueryParams<T>(options: T): string {
  let queryParams = [];
  for (let key in options) {
    queryParams.push(`${key}=${options[key]}`);
  }

  return queryParams.join("&");
}
