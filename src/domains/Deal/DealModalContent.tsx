import { Dialog } from "@headlessui/react";
import Error from "components/Error";
import LoadingSpinner from "components/LoadingSpinner";
import { useEffect, useState } from "react";
import { IReleaseDate } from "types";
import { convertDateTimestamp } from "utils";
import { IDealSearch } from "./types";
import { getDealById } from "./utils";

type Props = {
  dealId: string | undefined;
};

export const DealModalContent = (props: Props) => {
  const [deal, setDeal] = useState<IDealSearch>();
  const [releaseDate, setReleaseDate] = useState<IReleaseDate>();
  const [error, setError] = useState("");
  useEffect(() => {
    if (props.dealId) {
      getDealById(props.dealId)
        .then((response) => {
          setDeal(response);
          setReleaseDate(convertDateTimestamp(response.gameInfo.releaseDate));
        })
        .catch((error: Error) => {
          setError(error.message);
        });
    }
  }, [props.dealId, setReleaseDate]);

  if (!deal?.gameInfo) {
    if (error) {
      return <Error />;
    }
    return (
      <>
        <Dialog.Title
          as="h3"
          className="title-font font-medium text-lg text-textPrimary dark:text-textPrimary-dark font-bold"
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
        className="title-font font-medium text-lg text-textPrimary dark:text-textPrimary-dark font-bold"
      >
        {deal.gameInfo.name}
      </Dialog.Title>
      <div className="grid grid-cols-2 rows-2 justfy-start">
        <h3 className="font-medium">Publisher: </h3>
        <span>{deal.gameInfo.publisher}</span>
        <h3 className="font-medium">Metacritic score:</h3>
        <span className="flex">{deal.gameInfo.metacriticScore}</span>
        <h3 className="font-medium">Steam rating:</h3>
        <span>{deal.gameInfo.steamRatingText}</span>
        <h3 className="font-medium">Steam rating percent:</h3>
        <span>{deal.gameInfo.steamRatingPercent}%</span>
        <h3 className="font-medium">Steam rating count:</h3>
        <span>{deal.gameInfo.steamRatingCount}</span>
        <h3 className="font-medium">From steamworks:</h3>
        <span> {deal.gameInfo.steamworks ? "Yes" : "No"}</span>
        <h3 className="font-medium">Release date:</h3>
        <span>{`${releaseDate?.dateString} ${
          releaseDate?.ageString && `(${releaseDate.ageString})`
        }`}</span>
      </div>
      <p className="mt-3 italic text-xs text-right">*Prices are in USD</p>
    </>
  );
};

export default DealModalContent;
