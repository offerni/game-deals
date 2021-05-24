import Deals from "domains/Deal/Deals";

const PageContent = () => {
  return (
    <div className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-4 place-items-center">
      <Deals />
    </div>
  );
};

export default PageContent;
