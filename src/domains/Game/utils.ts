import { ISearchParams } from "types";
import { buildQueryParams } from "utils";
import {
  APICheapestPrice,
  APIGameDeals,
  APIGameInfo,
  APIGameLookup,
  APIGamesList,
  APIGamesQueryParams,
} from "api";
import {
  IGameCheapestPriceEver,
  IGameDeals,
  IGameLookup,
  IGameSearch,
} from "./types";

export const getGamesByTitle = async (
  title: string,
  options: APIGamesQueryParams = {}
): Promise<IGameSearch[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

  const games = await fetch(
    `${apiUrl}/games?title=${title}&${buildQueryParams<APIGamesQueryParams>(
      options
    )}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return convertAPIGames(games);
};

export const getGameById = async (id: string): Promise<IGameLookup> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

  const game = await fetch(`${apiUrl}/games?id=${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return convertAPIGameSearch(game);
};

const convertAPIGames = (apiGames: APIGamesList[]): IGameSearch[] => {
  return apiGames.map((apiGame) => ({
    gameId: apiGame.gameID,
    steamAppId: apiGame.steamAppID,
    cheapest: parseFloat(apiGame.cheapest),
    cheapestDealId: apiGame.cheapestDealID,
    external: apiGame.external,
    internalName: apiGame.internalName,
    thumb: apiGame.thumb,
  }));
};

const convertAPIGameSearch = (apiGameSearch: APIGameLookup): IGameLookup => {
  return {
    info: convertAPIGameInfo(apiGameSearch.info),
    cheapestPriceEver: convertAPIGameCheapestPriceEver(
      apiGameSearch.cheapestPriceEver
    ),
    deals: convertAPIGameDeals(apiGameSearch.deals),
  };
};

const convertAPIGameInfo = (apiGameInfo: APIGameInfo) => {
  return {
    title: apiGameInfo.title,
    steamAppId: apiGameInfo.steamAppID,
    thumb: apiGameInfo.thumb,
  };
};

const convertAPIGameCheapestPriceEver = (
  apiCheapestPrice: APICheapestPrice
): IGameCheapestPriceEver => {
  return {
    price: parseFloat(apiCheapestPrice.price),
    date: apiCheapestPrice.date,
  };
};

const convertAPIGameDeals = (apiGameDeals: APIGameDeals[]): IGameDeals[] => {
  return apiGameDeals.map((apiGameDeal) => ({
    storeId: apiGameDeal.storeID,
    dealId: apiGameDeal.dealID,
    price: parseFloat(apiGameDeal.price),
    retailPrice: parseFloat(apiGameDeal.retailPrice),
    savings: parseFloat(apiGameDeal.savings),
  }));
};

export const parseGamesQueryParams = (query: string): ISearchParams => {
  const parsedQuery = new URLSearchParams(query);
  return { query: parsedQuery.get("q") || "" };
};

export const isValidQueryParams = (query: string): boolean => {
  const parsedQuery = new URLSearchParams(query);
  return parsedQuery.has("q");
};
