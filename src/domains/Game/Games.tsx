import ScrollToTop from "components/ScrollToTop";
import Skeletons from "components/Skeletons";
import { useCallback, useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router";
import { ISearch } from "types";
import Game from "./Game";
import { IGameSearch } from "./types";
import { getGamesByTitle } from "./utils";

const Games = () => {
  const [games, setGames] = useState<IGameSearch[]>([]);
  const [IsPendingSearch, setIsPendingSearch] = useState<boolean>(true);
  const location = useLocation<ISearch>();
  const { state } = location;

  const fetchGames = useCallback(async () => {
    setIsPendingSearch(true);
    getGamesByTitle(state.params.search, { exact: state.params.exact }).then(
      (response) => {
        setGames(response);
        setIsPendingSearch(false);
      }
    );
    // @@todo: handle direct call without search params causing undefined
    // indexes in the callback dependencies
  }, [state.params.search, state.params.exact]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  // @@todo: pretty much never getting to this point currently
  if (!location.state?.params) {
    return (
      <Redirect
        to={{
          pathname: "/deals",
        }}
      />
    );
  }

  if (IsPendingSearch) {
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
