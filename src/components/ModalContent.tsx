import DealModalContent from "domains/Deal/DealModalContent";
import GameModalContent from "domains/Game/GameModalContent";
import { IModalContent } from "types";

type Props = {
  contentType: IModalContent | undefined;
  originId: string | undefined;
};
export const ModalContent = (props: Props) => {
  return (
    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      <div className="mt-2">
        {props.contentType?.deal ? (
          <DealModalContent dealId={props.originId} />
        ) : (
          <GameModalContent gameId={props.originId} />
        )}
      </div>
    </div>
  );
};

export default ModalContent;
