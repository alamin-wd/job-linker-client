
const LoadingSpinner = () => {

  return (

    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-6 border-b-6 border-[#00B4D8]"></div>
    </div>
     
  );
};

export default LoadingSpinner;
