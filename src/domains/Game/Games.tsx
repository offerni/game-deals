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
  const location = useLocation<ISearch>();
  const { state } = location;
  const fetchGames = useCallback(async () => {
    // @@todo: handle direct call without search params causing undefined
    // indexes in the callback dependencies
    getGamesByTitle(state.params.search, { exact: state.params.exact }).then(
      (response) => {
        setGames(response);
      }
    );
  }, [state.params.search, state.params.exact]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  if (!location.state?.params) {
    return (
      <Redirect
        to={{
          pathname: "/deals",
        }}
      />
    );
  }

  // @@todo: handle no games found vs response promise not yet fulfilled for skeleton
  if (!games.length) {
    return <Skeletons />;
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
