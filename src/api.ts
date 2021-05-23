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
  chapestPrice: APICheapestPrice;
}

interface APIDealGameInfo {
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

interface APIDealCheaperStores {
  dealID: string;
  storeID: string;
  salePrice: string;
  retailPrice: string;
}

interface APICheapestPrice {
  price: string;
  date: number;
}

export interface APIStore {
  storeID: string;
  storeName: string;
  isActive: boolean;
  images: APIStoreImage;
}

interface APIStoreImage {
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

interface APIGameInfo {
  title: string;
  steamAppID: string;
  thumb: string;
}

interface APIGameDeals {
  storeID: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
}
