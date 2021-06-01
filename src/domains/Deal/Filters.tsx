import { STORES } from "domains/Store/utils";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { IFilters } from "types";

export const Filters = () => {
  const history = useHistory();
  const [filterClicked, setFilterClicked] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleClick = () => {
    setFilterClicked(!filterClicked);
  };

  const onSubmit: SubmitHandler<IFilters> = (data) => {
    history.push("/deals", data);
  };

  const handleOnChange = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <div className="grid grid-cols-12 mb-3 mt-0 text-gray-600 body-font sticky top-20 z-49 ml-10">
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
          className="justify-center ml-8 mr-8 mb-8"
          onChange={handleOnChange}
        >
          <div className="border grid grid-cols-10 p-4">
            {console.log(STORES)}
            {Object.keys(STORES).map((storeId) => {
              return (
                <span key={storeId}>
                  <input
                    type="checkbox"
                    value={storeId}
                    {...register("storeIds")}
                    className="mr-3"
                  />
                  <label>{STORES[storeId].storeName}</label>
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
