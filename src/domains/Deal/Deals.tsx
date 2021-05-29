import { useCallback, useEffect, useState } from "react";
import Deal from "./Deal";
import { IDeal } from "./types";
import { getDeals } from "./utils";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "components/LoadingSpinner";
import ScrollToTop from "components/ScrollToTop";
import Skeletons from "components/Skeletons";
import { APIDealsQueryParams } from "api";

type Props = {
  giveaways?: boolean;
};

const Deals = (props: Props) => {
  const [deals, setDeals] = useState<IDeal[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const fetchDeals = useCallback(async () => {
    const queryParams: APIDealsQueryParams = {
      pageNumber: currentPage,
      onSale: 1,
    };

    // @@todo: improve this
    if (props.giveaways) {
      queryParams.upperPrice = 0;
    }

    getDeals(queryParams).then((response) => {
      setDeals([...deals, ...response]);
      setCurrentPage(currentPage + 1);
    });
  }, [currentPage, deals, props]);

  useEffect(() => {
    if (deals.length === 0) {
      fetchDeals();
    }
  }, [fetchDeals, deals]);

  if (!deals.length) {
    return <Skeletons />;
  }

  return (
    <>
      <ScrollToTop />
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
        {deals.map((deal) => {
          return <Deal key={deal.dealId} deal={deal} />;
        })}
      </InfiniteScroll>
    </>
  );
};

export default Deals;
