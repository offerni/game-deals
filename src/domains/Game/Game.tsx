import MoreDetailsButton from "components/MoreDetailsButton";
import { IGameSearch } from "./types";
import Card from "components/Card";

type Props = {
  game: IGameSearch;
};

const Game = (props: Props) => {
  const { game } = props;
  return (
    <>
      <Card>
        <a
          href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealId}`}
          target="_blank"
          rel="noreferrer"
          className="flex-shrink-0"
        >
          <img
            alt={game.external}
            className="rounded-lg w-48 h-48"
            src={game.thumb}
          />
        </a>
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-textPrimary dark:text-textPrimary-dark font-bold">
            <a
              href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealId}`}
              target="_blank"
              rel="noreferrer"
            >
              {game.external}
            </a>
          </h2>
          <div className="grid grid-cols-1 grid-rows-1">
            <h3 className="text-gray-500 dark:text-gray-400 mb-3">
              Cheapest: ${game.cheapest}
            </h3>
            <MoreDetailsButton
              originId={game.gameId}
              contentType={{ game: true }}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Game;
