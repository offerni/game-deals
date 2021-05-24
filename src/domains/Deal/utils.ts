import {
  APIDealsList,
  APIDealLookup,
  buildQueryParams,
  APIDealsQueryParams,
} from "api";
import { IDeal } from "./types";

export const getDeals = async (
  options: APIDealsQueryParams
): Promise<IDeal[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  const deals = await fetch(
    `${apiUrl}/deals?${buildQueryParams<APIDealsQueryParams>(options)}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return convertAPIDeals(deals);
};

export const getDealById = async (id: string): Promise<APIDealLookup> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  return await fetch(`${apiUrl}/deals?id=${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};

const convertAPIDeals = (apiDeals: APIDealsList[]): IDeal[] => {
  return apiDeals.map((apiDeal) => ({
    internalName: apiDeal.internalName,
    title: apiDeal.title,
    metacriticLink: apiDeal.metacriticLink,
    dealID: apiDeal.dealID,
    storeID: apiDeal.storeID,
    gameID: apiDeal.gameID,
    salePrice: parseFloat(apiDeal.salePrice),
    normalPrice: parseFloat(apiDeal.normalPrice),
    isOnSale: Boolean(apiDeal.isOnSale),
    savings: parseFloat(apiDeal.savings),
    metacriticScore: parseFloat(apiDeal.metacriticScore),
    steamRatingText: apiDeal.steamRatingText,
    steamRatingPercent: parseFloat(apiDeal.steamRatingPercent),
    steamRatingCount: parseFloat(apiDeal.steamRatingCount),
    steamAppID: apiDeal.steamAppID,
    releaseDate: apiDeal.releaseDate,
    lastChange: apiDeal.lastChange,
    dealRating: parseFloat(apiDeal.dealRating),
    thumb: apiDeal.thumb,
  }));
};
