export interface IGameSearch {
  gameId: string;
  steamAppId: string;
  cheapest: number;
  cheapestDealId: string;
  external: string;
  internalName: string;
  thumb: string;
}

export interface IGameLookup {
  info: IGameInfo;
  cheapestPriceEver: IGameCheapestPriceEver;
  deals: IGameDeals[];
}

export interface IGameInfo {
  title: string;
  steamAppId: string;
  thumb: string;
}

export interface IGameCheapestPriceEver {
  price: number;
  date: number;
}

export interface IGameDeals {
  storeId: string;
  dealId: string;
  price: number;
  retailPrice: number;
  savings: number;
}
