import { useEffect, useState } from "react";
import Deal from "./Deal";
import { IDeal, IDealParams } from "./types";
import {
  builDealsQueryParams,
  getDealById,
  getDeals,
  mapDealGameInfoToGameDeals,
} from "./utils";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "components/LoadingSpinner";
import Skeletons from "components/Skeletons";
import { useLocation, useParams } from "react-router";
import { PAGE_SIZE, scrollToTop } from "utils";
import { IDealsLocation } from "types";
import { useForm } from "react-hook-form";
import Error from "components/Error";

const Deals = () => {
  const [deals, setDeals] = useState<IDeal[]>([]);
  const [error, setError] = useState<string>("");
  const location: IDealsLocation = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { reset } = useForm();
  const { id } = useParams<IDealParams>();

  useEffect(() => {
    scrollToTop();
    setDeals([]);
    window.history.replaceState({}, document.title); // reseting

    setIsLoading(true);
    if (id) {
      getDealById(id).then((response) => {
        const responseArray: IDeal[] = [
          mapDealGameInfoToGameDeals(id, response.gameInfo),
        ];

        setDeals(responseArray);
        setIsLoading(false);
      });
    } else {
      getDeals(builDealsQueryParams(location))
        .then((response) => {
          setDeals(response);
          setIsLoading(false);
        })
        .catch((err: Error) => {
          setError(err.message);
        });
    }
  }, [location, reset, id]);

  if (isLoading && !error) {
    return <Skeletons />;
  }

  if (error) {
    return <Error />;
  }

  if (!deals.length) {
    return (
      <div className="grid grid-cols-3 place-items-center">
        <span className="col-span-3">No Deals Found</span>
      </div>
    );
  }

  const fetchNextDeals = () => {
    getDeals(builDealsQueryParams(location, deals.length)).then((response) => {
      setDeals((currentDeals) => [...currentDeals, ...response]);
    });
  };

  return (
    <InfiniteScroll
      className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 place-items-center p-3 mt-10"
      dataLength={deals.length}
      next={fetchNextDeals}
      hasMore={deals.length >= PAGE_SIZE}
      loader={
        <span className="col-span-1 lg:col-span-2 xl:col-span-3">
          <LoadingSpinner />
        </span>
      }
    >
      {deals.map((deal) => {
        return <Deal key={deal.dealId} deal={deal} />;
      })}
    </InfiniteScroll>
  );
};

export default Deals;
