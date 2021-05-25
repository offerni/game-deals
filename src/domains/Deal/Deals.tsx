import { useEffect, useState } from "react";
import Deal from "./Deal";
import { IDeal } from "./types";
import { getDeals } from "./utils";
import InfiniteScroll from "react-infinite-scroll-component";
import DealSkeletons from "./DealSkeletons";
import LoadingSpinner from "components/LoadingSpinner";

const Deals = () => {
  const [deals, setDeals] = useState<IDeal[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const fetchDeals = async () => {
    getDeals({ pageNumber: currentPage }).then((response) => {
      setDeals([...deals, ...response]);
      setCurrentPage(currentPage + 1);
    });
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  if (!deals.length) {
    return <DealSkeletons />;
  }

  return (
    <InfiniteScroll
      className="grid grid-cols-3 gap-6 grid-rows-1 place-items-center"
      dataLength={deals.length}
      next={fetchDeals}
      hasMore={true}
      loader={
        <span className="col-span-3">
          <LoadingSpinner />
        </span>
      }
    >
      {deals.map((deal: IDeal) => {
        return <Deal deal={deal} />;
      })}
    </InfiniteScroll>
  );
};

export default Deals;
