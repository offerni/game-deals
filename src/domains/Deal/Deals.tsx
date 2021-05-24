import { useEffect, useState } from "react";
import Deal from "./Deal";
import { IDeal } from "./types";
import { getDeals } from "./utils";

const Deals = () => {
  const [deals, setDeals] = useState<IDeal[]>([]);

  useEffect(() => {
    getDeals({}).then((response) => {
      setDeals(response);
    });
  }, []);

  if (!deals.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-6 grid-rows-1 place-items-center">
      {deals.map((deal: IDeal) => {
        return <Deal deal={deal} />;
      })}
    </div>
  );
};

export default Deals;
