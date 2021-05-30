import DealModalContent from "domains/Deal/DealGameContent";
import GameModalContent from "domains/Game/GameModalContent";
import { IModalContent } from "types";

type Props = {
  contentType: IModalContent | undefined;
};
export const ModalContent = (props: Props) => {
  return (
    <div className="sm:flex sm:items-start">
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <div className="mt-2">
          {props.contentType?.deal ? (
            <DealModalContent />
          ) : (
            <GameModalContent />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
