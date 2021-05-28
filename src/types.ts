import { IGameSearch } from "domains/Game/types";

export interface ISearch {
  params: ISearchParams;
}

export interface ISearchParams {
  search: string;
  exact?: number;
}
