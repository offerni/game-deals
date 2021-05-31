import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IGameLookup } from "./types";
import { getGameById } from "./utils";
import { convertDateTimestamp } from "utils";
import LoadingSpinner from "components/LoadingSpinner";
import { IReleaseDate } from "types";

type Props = {
  gameId: string | undefined;
};

export const GameModalContent = (props: Props) => {
  const [game, setGame] = useState<IGameLookup>();
  const [cheapestPriceDate, setCheapestPriceDate] = useState<IReleaseDate>();
  useEffect(() => {
    if (props.gameId) {
      getGameById(props.gameId).then((response) => {
        setGame(response);
        setCheapestPriceDate(
          convertDateTimestamp(response.cheapestPriceEver.date)
        );
      });
    }
  }, [props.gameId, setCheapestPriceDate]);

  if (!game?.info) {
    return (
      <>
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-semibold text-gray-900 mb-4 mt-0"
        >
          Game Details
        </Dialog.Title>
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      </>
    );
  }

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg leading-6 font-semibold text-gray-900 mb-4 mt-0"
      >
        {game.info.title}
      </Dialog.Title>
      <div className="grid grid-cols-2 rows-2 justfy-start">
        <h3 className="font-medium">Cheaper price ever: </h3>
        <span>${game.cheapestPriceEver.price}</span>
      </div>
      <div className="grid grid-cols-2 rows-2 justfy-start">
        <h3 className="font-medium">Cheaper price registered on:</h3>
        <span>{`${cheapestPriceDate?.dateString} ${
          cheapestPriceDate?.ageString && `(${cheapestPriceDate.ageString})`
        }`}</span>
      </div>
      <h3 className="text-lg leading-6 font-semibold text-gray-900 mb-2 mt-4">
        Current deals:
      </h3>
      <div className="overflow-y-auto h-64">
        {game.deals.map((game) => {
          return (
            <div
              className="border p-3 mt-2 transition duration-200 ease-in-out hover:bg-gray-100"
              key={game.dealId}
            >
              <div className="grid grid-cols-2 rows-2 justfy-start">
                <h3 className="font-medium">Price:</h3>
                <span>${game.price}</span>
              </div>
              <div className="grid grid-cols-2 rows-2 justfy-start">
                <h3 className="font-medium">Retail price:</h3>
                <span>${game.retailPrice}</span>
              </div>
              <div className="grid grid-cols-2 rows-2 justfy-start">
                <h3 className="font-medium">Discount:</h3>
                <span>{Math.round(game.savings)}%</span>
              </div>
              <div className="grid grid-cols-2 rows-2 justfy-start">
                <h3 className="font-medium">Store:</h3>
                <span>
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500"
                  >
                    {game.storeInfo.storeName}
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameModalContent;
