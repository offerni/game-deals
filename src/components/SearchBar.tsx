import { ISearch } from "types";
import { useForm, SubmitHandler } from "react-hook-form";
import { getGamesByTitle } from "domains/Game/utils";
import { useHistory } from "react-router";

const SearchBar = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearch>();

  const onSearchSubmit: SubmitHandler<ISearch> = (data: ISearch) => {
    getGamesByTitle(data.searchParams, { exact: 0 }).then((result) => {
      history.push("/games", { searchResults: result });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSearchSubmit)}>
      <div className="relative text-gray-600 focus-within:text-gray-400 w-auto z-50">
        <input
          type="search"
          className="py-2 text-sm text-gray-900 bg-indigo-50 opacity-75 rounded-md pl-3 focus:outline-none focus:bg-white focus:text-gray-900"
          placeholder="Search Game..."
          autoComplete="off"
          {...register("searchParams", { required: true })}
        />
        {errors.searchParams && <div>This field is required</div>}
        <span className="absolute inset-y-0 right-0 flex items-center pr-1">
          <button className="p-1 focus:outline-none focus:shadow-outline">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
