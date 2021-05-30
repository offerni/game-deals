import { Dialog } from "@headlessui/react";

export const DealModalContent = () => {
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
