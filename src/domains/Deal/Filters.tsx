import { getOrderedStores } from "domains/Store/utils";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { IFilters } from "types";
import { FilterIcon } from "@heroicons/react/outline";

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
    <div
      className={`sm:fixed sm:z-50 ${
        filterOpen ? "sm:bg-primary sm:dark:bg-primary-dark" : ""
      }`}
    >
      <div className="mb-3 mt-0 text-gray-600 dark:text-gray-100 body-font ml-6">
        <button
          onClick={handleClick}
          className={`rounded-b-lg ${
            filterOpen
              ? "shadow-sm bg-primary scale-110 dark:bg-primary-dark"
              : "bg-primary scale-100"
          } border-0 dark:bg-primary-dark focus:outline-none transition duration-100 ease-in-out hover:bg-primary-100 transform hover:-translate-w-1 hover:scale-110`}
        >
          <FilterIcon className="w-6 mx-1 my-1 p-0.5 text-gray-500 dark:text-white" />
        </button>
      </div>
      {filterOpen && (
        <form
          className="justify-center ml-8 mr-8 mb-8 z-50 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100"
          onChange={handleOnChange}
        >
          <div className="border gap-2 grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 p-4">
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
    </div>
  );
};

export default Filters;
