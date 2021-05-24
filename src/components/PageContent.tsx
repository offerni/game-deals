import Deals from "domains/Deal/Deals";

const PageContent = () => {
  return (
    // ref: https://tailblocks.cc/
    <div className="grid grid-flow-col grid-cols-1 gap-4 place-items-center">
      <Deals />
    </div>
  );
};

export default PageContent;
