const loading = () => {
  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex gap-4 flex-col items-center sm:flex-row">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-4 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-4 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-4 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default loading;
