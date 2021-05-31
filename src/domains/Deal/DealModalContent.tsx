import { Dialog } from "@headlessui/react";
import LoadingSpinner from "components/LoadingSpinner";
import { useEffect, useState } from "react";
import { IDealSearch } from "./types";
import { getDealById } from "./utils";

type Props = {
  dealId: string | undefined;
};

export const DealModalContent = (props: Props) => {
  const [deal, setDeal] = useState<IDealSearch>();
  useEffect(() => {
    if (props.dealId) {
      getDealById(props.dealId).then((response) => {
        setDeal(response);
      });
    }
  }, [props.dealId]);

  if (!deal?.gameInfo) {
    return (
      <>
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-semibold text-gray-900 mb-4 mt-0"
        >
          Deal Details
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
        {deal.gameInfo.name}
      </Dialog.Title>
      <div className="grid grid-cols-2 rows-2 justfy-start">
        <h3 className="font-medium">Publisher: </h3>
        <span>{deal.gameInfo.publisher}</span>
        <h3 className="font-medium">Metacritic score:</h3>
        <span className="flex">{deal.gameInfo.metacriticScore}</span>
        <h3 className="font-medium">Steam rating text:</h3>
        <span>{deal.gameInfo.steamRatingText}</span>
        <h3 className="font-medium">Steam rating percent:</h3>
        <span>{deal.gameInfo.steamRatingPercent}%</span>
        <h3 className="font-medium">Steam rating count:</h3>
        <span>{deal.gameInfo.steamRatingCount}</span>
        <h3 className="font-medium">From steamworks:</h3>
        <span> {deal.gameInfo.steamworks ? "Yes" : "No"}</span>
        <h3 className="font-medium">Release date:</h3>
        <span>{deal.gameInfo.releaseDate}</span>
      </div>
    </>
  );
};

export default DealModalContent;
