import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IGameLookup } from "./types";
import { getGameById } from "./utils";
import LoadingSpinner from "components/LoadingSpinner";

type Props = {
  gameId: string | undefined;
};

export const GameModalContent = (props: Props) => {
  const [game, setGame] = useState<IGameLookup>();
  useEffect(() => {
    if (props.gameId) {
      getGameById(props.gameId).then((response) => {
        setGame(response);
      });
    }
  }, [props.gameId]);

  if (!game?.info) {
    return (
      <>
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-medium text-gray-900"
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
        className="text-lg leading-6 font-medium text-gray-900"
      >
        Game Details
      </Dialog.Title>
    </>
  );
};

export default GameModalContent;
