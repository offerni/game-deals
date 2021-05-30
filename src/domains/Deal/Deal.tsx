import MoreDetailsButton from "components/MoreDetailsButton";
import ReactTooltip from "react-tooltip";
import { IDeal } from "./types";

type Props = {
  deal: IDeal;
};

const Deal = (props: Props) => {
  const { deal } = props;
  const imgUrl: string | undefined = process.env.REACT_APP_IMAGE_URL;
  const metacriticUrl: string | undefined =
    process.env.REACT_APP_METACRITIC_URL;

  return (
    <>
      <div className="p-4 border-2 border-gray-100 rounded-lg lg:w-full transition duration-100 ease-in-out hover:bg-gray-100 transform hover:-translate-w-1 hover:scale-110">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <a
            href={`https://www.cheapshark.com/redirect?dealID=${deal.dealId}`}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0"
          >
            <img
              alt={deal.title}
              className="rounded-lg w-48 h-48"
              src={deal.thumb}
            />
          </a>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900 font-bold">
              <a
                href={`https://www.cheapshark.com/redirect?dealID=${deal.dealId}`}
                target="_blank"
                rel="noreferrer"
              >
                {deal.title}
              </a>
            </h2>
            <div className="grid grid-cols-3 grid-rows-1">
              <h3 className="text-gray-500 mb-3">${deal.normalPrice}</h3>
              <div className="grid grid-cols-2 gap-6 grid-rows-1">
                <h3 className="text-gray-500 mb-3">
                  {deal.salePrice !== 0 ? `$${deal.salePrice}` : "FREE"}
                </h3>
                <h3 className="text-gray-500 mb-3">
                  ({deal.discountPercentage}%)
                </h3>
              </div>
            </div>
            <div>
              {deal.steamRatingText && (
                <p>
                  Steam Rating: <span>{deal.steamRatingText}</span>
                </p>
              )}
              {deal.metacriticScore > 0 && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${metacriticUrl}${deal.metacriticLink}`}
                  className="text-indigo-500"
                >
                  <p>Metacritic Score: {deal.metacriticScore}</p>
                </a>
              )}
            </div>
            <div className="align-bottom mt-4">
              <img
                className="rounded-lg w-8 h-8"
                data-for={deal.dealId}
                data-tip={`${deal.storeInfo.storeName}`}
                data-place="top"
                data-offset="{'top': 30, 'left': 20}"
                alt={`Store: ${deal.storeInfo.storeName}`}
                src={`${imgUrl}/${deal.storeInfo.images.logo}`}
              />
              <ReactTooltip id={deal.dealId} effect="float" />
              <MoreDetailsButton
                originId={deal.dealId}
                contentType={{ deal: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;
