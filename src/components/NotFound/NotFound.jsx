import { FaRegQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {

    return (

        <div className="max-w-full mx-auto min-h-screen">

            <div className="w-10/12 mx-auto flex md:justify-between md:items-center my-20">

                <h3 className="text-3xl font-semibold">404 Not Found</h3>

                <Link to={'/'}>
                    <h3 className="text-xl font-semibold btn btn-info">Back to Home</h3>
                </Link>
            </div>

            <div className="w-1/2 mx-auto text-center ">
                <h2 className="flex items-center justify-center text-9xl font-bold text-[#48CAE4]">
                    4 <FaRegQuestionCircle /> 4
                </h2>

                <p className="text-xl text-gray-600 font-medium mt-10">
                    We're sorry, but the page you were looking for doesn't exist
                </p>
            </div>

        </div>
    );
};

export default NotFound;