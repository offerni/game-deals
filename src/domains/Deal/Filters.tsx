import { getOrderedStores } from "domains/Store/utils";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { IFilters } from "types";

const ORDERED_STORES = getOrderedStores();

export const Filters = () => {
  const history = useHistory();
  const location = useLocation();
  const [filterClicked, setFilterClicked] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleClick = () => {
    setFilterClicked(!filterClicked);
  };

  const onSubmit: SubmitHandler<IFilters> = (data) => {
    history.push(location.pathname, data);
  };

  const handleOnChange = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <div className="grid grid-cols-12 mb-3 mt-0 text-gray-600 body-font sticky top-20 z-50 ml-10">
        <button
          onClick={handleClick}
          className={`rounded-b-lg ${
            filterClicked
              ? "shadow-sm bg-indigo-100 scale-110"
              : "bg-indigo-50 scale-100"
          } border-0 py-1 px-3 focus:outline-none transition duration-100 ease-in-out hover:bg-indigo-100 transform hover:-translate-w-1 hover:scale-110`}
        >
          Filters
        </button>
      </div>
      {filterClicked && (
        <form
          className="justify-center ml-8 mr-8 mb-8 sticky top-20 z-50 bg-white"
          onChange={handleOnChange}
        >
          <div className="border grid grid-flow-col grid-cols-8 grid-rows-4 p-4">
            {ORDERED_STORES.map((store) => {
              return (
                <span key={store.storeId}>
                  <input
                    type="checkbox"
                    value={store.storeId}
                    {...register("storeIds")}
                    className="mr-3"
                  />
                  <label>{store.storeName}</label>
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
