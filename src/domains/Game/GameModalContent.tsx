import { Dialog } from "@headlessui/react";

export const GameModalContent = () => {
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
