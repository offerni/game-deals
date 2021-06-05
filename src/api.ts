export interface APIDealsList {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
}

export interface APIDealLookup {
  gameInfo: APIDealGameInfo;
  cheaperStores: APIDealCheaperStores[];
  cheapestPrice: APICheapestPrice;
}

export interface APIDealGameInfo {
  storeID: string;
  gameID: string;
  name: string;
  steamAppID: string;
  salePrice: string;
  retailPrice: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  metacriticScore: string;
  metacriticLink: string;
  releaseDate: number;
  publisher: string;
  steamworks: string;
  thumb: string;
}

export interface APIDealCheaperStores {
  dealID: string;
  storeID: string;
  salePrice: string;
  retailPrice: string;
}

export interface APICheapestPrice {
  price: string;
  date: number;
}

export interface APIDealsQueryParams {
  storeID?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  desc?: number;
  lowerPrice?: number;
  upperPrice?: number;
  metacritic?: number;
  steamRating?: number;
  steamAppID?: string;
  title?: string;
  exact?: number;
  aaa?: number;
  steamWorks?: number;
  onSale?: number;
  output?: string;
}

export interface APIStore {
  storeID: string;
  storeName: string;
  isActive: number;
  images: APIStoreImage;
}

export interface APIStoreImage {
  banner: string;
  logo: string;
  icon: string;
}

export interface APIGamesList {
  gameID: string;
  steamAppID: string;
  cheapest: string;
  cheapestDealID: string;
  external: string;
  internalName: string;
  thumb: string;
}

export interface APIGameLookup {
  info: APIGameInfo;
  cheapestPriceEver: APICheapestPrice;
  deals: APIGameDeals[];
}

export interface APIGameInfo {
  title: string;
  steamAppID: string;
  thumb: string;
}

export interface APIGameDeals {
  storeID: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
}

export interface APIGamesQueryParams {
  title?: string;
  steamAppID?: number;
  limit?: number;
  exact?: number; // ideally a boolean but the API only expects 1 or 0
}
