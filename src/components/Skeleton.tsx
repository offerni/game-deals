const Skeleton = () => {
  return (
    <div className="border shadow border-indigo-100 rounded-md p-4 max-w-lg w-full">
      <div className="flex space-x-4 animate-pulse">
        <div className="rounded-lg bg-indigo-100 h-48 w-48"></div>
        <div className="flex-1 space-y-4 py-1 mt-10">
          <div className="h-4 bg-indigo-100 rounded w-3/2"></div>
          <div className="h-4 bg-indigo-100 rounded w-3/6"></div>
          <div className="space-y-2">
            <div className="h-4 bg-indigo-100 rounded w-4/6"></div>
            <div className="h-4 bg-indigo-100 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
