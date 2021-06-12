import { useContext } from "react";
import { IModalContent } from "types";
import { ModalContext } from "./ModalContext";

type Props = {
  originId: string;
  contentType: IModalContent;
};

const MoreDetailsButton = (props: Props) => {
  const dispatch = useContext(ModalContext);
  const handleOnClick = () => {
    dispatch({
      type: "open",
      originId: props.originId,
      contentType: props.contentType,
    });
  };
  return (
    <button
      className="text-link dark:text-link-dark font-bold underline inline-flex items-center md:mb-2 lg:mb-0 focus:outline-none mt-2"
      onClick={handleOnClick}
    >
      More Details
    </button>
  );
};

export default MoreDetailsButton;
