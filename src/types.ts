import { IGameSearch } from "domains/Game/types";

export interface ISearch {
  params: ISearchParams;
}

export interface ISearchParams {
  query: string;
}
