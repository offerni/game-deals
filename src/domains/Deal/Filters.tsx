import { getOrderedStores } from "domains/Store/utils";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { IFilters } from "types";

const ORDERED_STORES = getOrderedStores();

export const Filters = () => {
  const history = useHistory();
  const location = useLocation();
  const [filterOpen, setFilterOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // resetting filters
    setFilterOpen(false);
    reset();
  }, [location.pathname, reset, setFilterOpen]);

  const handleClick = () => {
    setFilterOpen(!filterOpen);
  };

  const onSubmit: SubmitHandler<IFilters> = (data) => {
    history.push(location.pathname, data);
  };

  const handleOnChange = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <div className="grid grid-cols-12 mb-3 mt-0 text-gray-600 dark:text-gray-100 body-font z-50 ml-10">
        <button
          onClick={handleClick}
          className={`rounded-b-lg ${
            filterOpen
              ? "shadow-sm bg-primary scale-110 dark:bg-primary-dark"
              : "bg-primary-50 scale-100"
          } border-0 py-1 px-3 dark:bg-primary focus:outline-none transition duration-100 ease-in-out hover:bg-primary-100 transform hover:-translate-w-1 hover:scale-110`}
        >
          Filters
        </button>
      </div>
      {filterOpen && (
        <form
          className="justify-center ml-8 mr-8 mb-8 z-50 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100"
          onChange={handleOnChange}
        >
          <div className="border grid grid-flow-col grid-cols-8 grid-rows-5 p-4">
            {ORDERED_STORES.map((store) => {
              return (
                <span key={store.storeId}>
                  <input
                    type="checkbox"
                    value={store.storeId}
                    {...register("storeIds")}
                    className="mr-3"
                  />
                  <label className="text-textSecondary dark:text-textSecondary-dark">
                    {store.storeName}
                  </label>
                </span>
              );
            })}
          </div>
        </form>
      )}
    </>
  );
};

export default Filters;
