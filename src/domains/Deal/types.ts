import { IStoreInfo } from "domains/Store/types";

export interface IDeal {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealId: string;
  storeInfo: IStoreInfo;
  gameId: string;
  salePrice: number;
  normalPrice: number;
  isOnSale: boolean;
  discountPercentage: number;
  metacriticScore: number;
  steamRatingText: string;
  steamRatingPercent: number;
  steamRatingCount: number;
  steamAppId: string;
  releaseDate: number;
  lastChange: number;
  dealRating: number;
  thumb: string;
}

export interface IDealSearch {
  gameInfo: IDealGameInfo;
  cheaperStores: IDealCheaperStores[];
  cheapestPrice: IDealCheapestPrice;
}

export interface IDealGameInfo {
  storeInfo: IStoreInfo;
  gameId: string;
  name: string;
  steamAppId: string;
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

export interface IDealCheaperStores {
  dealId: string;
  storeInfo: IStoreInfo;
  salePrice: number;
  retailPrice: number;
}

export interface IDealCheapestPrice {
  price: number;
  date: number;
}
