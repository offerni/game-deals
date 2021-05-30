export interface ISearch {
  params: ISearchParams;
}

export interface ISearchParams {
  query: string;
}

export interface IModalReducerAction {
  type: string;
  originId?: string;
}

export interface IModalReducerState {
  open: boolean;
  originId?: string;
}

export type Dispatch<A> = (value: A) => void;
