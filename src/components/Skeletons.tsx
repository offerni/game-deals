import Skeleton from "./Skeleton";

const Skeletons = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 lg grid-rows-1 gap-6 place-items-center">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default Skeletons;
