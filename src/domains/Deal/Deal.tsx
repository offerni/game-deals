import { IDeal } from "./types";

type Props = {
  deal: IDeal;
};

const Deal = (props: Props) => {
  return (
    <>
      <div className="bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-white">
          {props.deal.title}
        </h3>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md mb-4">
        <ul className="divide-y divide-gray-200">
          <li>
            <a className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-thin text-gray-700 truncate">
                    Steam Rating: {props.deal.steamRatingText}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {props.deal.normalPrice}% Off
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm font-light text-gray-500">
                      Store: Steam
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center mt-4 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View More
                </button>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Deal;
