
import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogins = () => {

    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = async () => {
        try {

            const result = await googleLogin();
            const { user } = result;

            const userInfo = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                role: "Worker",
                coins: 10
            };

            const response = await axiosPublic.post('/users', userInfo);

            if (response.data.success) {

                navigate("/");
            }
            else {
                
                console.log(response.data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full flex flex-row md:flex-col justify-between items-center gap-6 my-6">

            <button onClick={handleGoogleLogin}
                className="w-full flex justify-center items-center gap-4 p-2
            hover:bg-[#DB4437] hover:text-white text-xl font-medium border-2 border-[#00B4D8] rounded-lg">
                <FaGoogle className="text-3xl" />
                Google
            </button>

            <button
                className="w-full flex justify-center items-center gap-4 p-2
            hover:bg-[#4267B2] hover:text-white text-xl font-medium border-2 border-[#00B4D8] rounded-lg">
                <FaFacebookF className="text-3xl" />
                Facebook
            </button>

            <button
                className="w-full flex justify-center items-center gap-4 p-2
            hover:bg-[#0077B5] hover:text-white text-xl font-medium border-2 border-[#00B4D8] rounded-lg">
                <FaLinkedinIn className="text-3xl" />
                LinkedIn
            </button>

            <button
                className="w-full flex justify-center items-center gap-4 p-2
            hover:bg-[#444444] hover:text-white text-xl font-medium border-2 border-[#00B4D8] rounded-lg">
                <FaGithub className="text-3xl" />
                Github
            </button>
        </div>
    );
};

export default SocialLogins;
