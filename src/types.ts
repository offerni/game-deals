export interface ISearch {
  params: ISearchParams;
}

export interface ISearchParams {
  query: string;
}

export interface IModalReducerAction {
  type: string;
  originId?: string;
  contentType?: IModalContent;
}

export interface IModalReducerState {
  open: boolean;
  originId?: string;
  contentType?: IModalContent;
}

export type Dispatch<A> = (value: A) => void;

export interface IModalContent {
  deal?: boolean;
  game?: boolean;
}

export interface IReleaseDate {
  dateString: string;
  ageString: string;
}
