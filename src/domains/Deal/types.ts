export interface IDeal {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: number;
  normalPrice: number;
  isOnSale: boolean;
  savings: number;
  metacriticScore: number;
  steamRatingText: string;
  steamRatingPercent: number;
  steamRatingCount: number;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: number;
  thumb: string;
}

export interface IDealSearch {
  gameInfo: IDealGameInfo;
  cheaperStores: IDealCheaperStores[];
  chapestPrice: IDealCheapestPrice;
}

interface IDealGameInfo {
  storeID: string;
  gameID: string;
  name: string;
  steamAppID: string;
  salePrice: number;
  retailPrice: number;
  steamRatingText: string;
  steamRatingPercent: number;
  steamRatingCount: number;
  metacriticScore: number;
  metacriticLink: string;
  releaseDate: number;
  publisher: string;
  steamworks: boolean;
  thumb: string;
}

interface IDealCheaperStores {
  dealID: string;
  storeID: string;
  salePrice: number;
  retailPrice: number;
}

interface IDealCheapestPrice {
  price: number;
  date: number;
}
