import { useEffect, useState } from "react";
import Deal from "./Deal";
import { IDeal } from "./types";
import { getDeals } from "./utils";

const Deals = () => {
  const [deals, setDeals] = useState<IDeal[]>([]);

  useEffect(() => {
    getDeals({ upperPrice: 15, pageNumber: 0 }).then((response) => {
      setDeals(response);
    });
  }, []);

  if (!deals.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {deals.map((deal: IDeal) => {
        return <Deal deal={deal} />;
      })}
    </div>
  );
};

export default Deals;
