export interface IGameSearch {
  gameID: string;
  steamAppID: string;
  cheapest: number;
  cheapestDealID: string;
  external: string;
  internalName: string;
  thumb: string;
}

export interface IGameLookup {
  info: IGameInfo;
  cheapestPriceEver: IGameCheapestPriceEver;
  deals: IGameDeals[];
}

interface IGameInfo {
  title: string;
  steamAppID: string;
  thumb: string;
}

interface IGameCheapestPriceEver {
  price: number;
  date: number;
}

interface IGameDeals {
  storeID: string;
  dealID: string;
  price: number;
  retailPrice: number;
  savings: number;
}
