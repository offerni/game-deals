import ScrollToTop from "components/ScrollToTop";
import Skeletons from "components/Skeletons";
import { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router";
import { ISearch } from "types";
import Game from "./Game";
import { IGameSearch } from "./types";
import {
  getGamesByTitle,
  isValidQueryParams,
  parseGamesQueryParams,
} from "./utils";

const Games = () => {
  const [games, setGames] = useState<IGameSearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation<ISearch>();
  const { search } = location;

  useEffect(() => {
    const parsedQueryParams = parseGamesQueryParams(search);

    if (parsedQueryParams.query) {
      setIsLoading(true);
      getGamesByTitle(parsedQueryParams.query, { exact: 0 }).then(
        (response) => {
          setGames(response);
          setIsLoading(false);
        }
      );
    }
  }, [search]);

  if (!isValidQueryParams(search)) {
    return (
      <Redirect
        to={{
          pathname: "/deals",
        }}
      />
    );
  }

  if (isLoading) {
    return <Skeletons />;
  }

  if (!games.length) {
    return (
      <div className="grid grid-cols-3 place-items-center">
        <span className="col-span-3">No Games Found</span>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="grid grid-cols-3 gap-6 grid-rows-1 place-items-center">
        {games.map((game) => {
          return <Game key={game.gameId} game={game} />;
        })}
      </div>
    </>
  );
};

export default Games;
