import { buildQueryParams, PAGE_SIZE, PATHS } from "utils";
import {
  APIDealsList,
  APIDealLookup,
  APIDealsQueryParams,
  APIDealGameInfo,
  APIDealCheaperStores,
  APICheapestPrice,
} from "api";
import {
  IDeal,
  IDealCheaperStores,
  IDealCheapestPrice,
  IDealGameInfo,
  IDealSearch,
} from "./types";

export const getDeals = async (
  options: APIDealsQueryParams
): Promise<IDeal[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  const deals: APIDealsList[] = await fetch(
    `${apiUrl}/deals?${buildQueryParams<APIDealsQueryParams>(options)}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return convertAPIDeals(deals);
};

export const getDealById = async (id: string): Promise<IDealSearch> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  const deal: APIDealLookup = await fetch(`${apiUrl}/deals?id=${id}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
    }
  );

  return convertAPIDealSearch(deal);
};

const convertAPIDeals = (apiDeals: APIDealsList[]): IDeal[] => {
  return apiDeals.map((apiDeal) => ({
    internalName: apiDeal.internalName,
    title: apiDeal.title,
    metacriticLink: apiDeal.metacriticLink,
    dealId: apiDeal.dealID,
    storeId: apiDeal.storeID,
    gameId: apiDeal.gameID,
    salePrice: parseFloat(apiDeal.salePrice),
    normalPrice: parseFloat(apiDeal.normalPrice),
    isOnSale: Boolean(apiDeal.isOnSale),
    discountPercentage: Math.round(parseFloat(apiDeal.savings)),
    metacriticScore: parseFloat(apiDeal.metacriticScore),
    steamRatingText: apiDeal.steamRatingText,
    steamRatingPercent: parseFloat(apiDeal.steamRatingPercent),
    steamRatingCount: parseFloat(apiDeal.steamRatingCount),
    steamAppId: apiDeal.steamAppID,
    releaseDate: apiDeal.releaseDate,
    lastChange: apiDeal.lastChange,
    dealRating: parseFloat(apiDeal.dealRating),
    thumb: apiDeal.thumb,
  }));
};

const convertAPIDealSearch = (apiDealSearch: APIDealLookup): IDealSearch => {
  return {
    gameInfo: convertAPIDealGameInfo(apiDealSearch.gameInfo),
    cheaperStores: convertAPIDealCheaperStores(apiDealSearch.cheaperStores),
    cheapestPrice: convertAPIDealCheapestPrice(apiDealSearch.cheapestPrice),
  };
};

const convertAPIDealGameInfo = (
  apiDealGameInfo: APIDealGameInfo
): IDealGameInfo => {
  return {
    storeId: apiDealGameInfo.storeID,
    gameId: apiDealGameInfo.gameID,
    name: apiDealGameInfo.name,
    steamAppId: apiDealGameInfo.steamAppID,
    salePrice: parseFloat(apiDealGameInfo.salePrice),
    retailPrice: parseFloat(apiDealGameInfo.retailPrice),
    steamRatingText: apiDealGameInfo.steamRatingText,
    steamRatingPercent: parseFloat(apiDealGameInfo.steamRatingPercent),
    steamRatingCount: parseFloat(apiDealGameInfo.steamRatingCount),
    metacriticScore: parseFloat(apiDealGameInfo.metacriticScore),
    metacriticLink: apiDealGameInfo.metacriticLink,
    releaseDate: apiDealGameInfo.releaseDate,
    publisher: apiDealGameInfo.publisher,
    steamworks: Boolean(apiDealGameInfo.steamworks),
    thumb: apiDealGameInfo.thumb,
  };
};

const convertAPIDealCheaperStores = (
  apiDealCheaperStores: APIDealCheaperStores[]
): IDealCheaperStores[] => {
  return apiDealCheaperStores.map((apiDealCheaperStore) => ({
    dealId: apiDealCheaperStore.dealID,
    storeId: apiDealCheaperStore.storeID,
    salePrice: parseFloat(apiDealCheaperStore.salePrice),
    retailPrice: parseFloat(apiDealCheaperStore.retailPrice),
  }));
};

const convertAPIDealCheapestPrice = (
  apiCheapestPrice: APICheapestPrice
): IDealCheapestPrice => {
  return {
    price: parseFloat(apiCheapestPrice.price),
    date: apiCheapestPrice.date,
  };
};

export const calculateDiscountPercentage = (deal: APIDealsList): number => {
  const normalPrice: number = parseFloat(deal.normalPrice);
  const salePrice: number = parseFloat(deal.salePrice);
  if (salePrice <= 0) {
    return 0;
  }

  return Math.round(((normalPrice - salePrice) / normalPrice) * 100);
};

export const builDealsQueryParams = (
  pathName: string,
  dealsSize: number = 0
): APIDealsQueryParams => {
  if (pathName === PATHS.free) {
    return {
      upperPrice: 0,
    };
  }

  return {
    pageNumber: getCurrentPage(dealsSize),
    onSale: 1,
    lowerPrice: 0.01,
    ...(pathName === PATHS.recent ? { sortBy: "recent" } : {}),
  };
};

const getCurrentPage = (dealsSize: number) =>
  dealsSize && dealsSize / PAGE_SIZE;
