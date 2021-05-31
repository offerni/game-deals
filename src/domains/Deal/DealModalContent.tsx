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
          className="text-lg leading-6 font-medium text-gray-900"
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
        className="text-lg leading-6 font-medium text-gray-900"
      >
        Deal Details
      </Dialog.Title>
    </>
  );
};

export default DealModalContent;
