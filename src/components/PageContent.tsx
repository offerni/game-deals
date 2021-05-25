import Deals from "domains/Deal/Deals";
import ScrollToTop from "./ScrollToTop";

const PageContent = () => {
  return (
    // ref: https://tailblocks.cc/
    <div className="container m-auto">
      <Deals />
    </div>
  );
};

export default PageContent;
