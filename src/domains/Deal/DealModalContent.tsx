import { Dialog } from "@headlessui/react";

type Props = {
  dealId: string | undefined;
};

export const DealModalContent = (props: Props) => {
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
