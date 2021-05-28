import { useLocation } from "react-router";
import { ISearchResult } from "types";
import { IGameSearch } from "./types";

const Games = () => {
  const location = useLocation<ISearchResult>(); // @@todo: review these types.
  console.log(location);

  if (location.state)
    location.state.searchResults.map((result) => {
      console.log(result);
    });

  return <div></div>;
};

export default Games;
