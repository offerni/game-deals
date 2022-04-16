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
      className="text-link dark:text-link-dark font-bold underline inline-flex items-center focus:outline-none"
      onClick={handleOnClick}
    >
      More Details
    </button>
  );
};

export default MoreDetailsButton;
