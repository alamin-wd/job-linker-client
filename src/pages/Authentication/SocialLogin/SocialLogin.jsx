
// import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { useNavigate } from "react-router-dom";


const SocialLogins = () => {

    // const { googleSignIn } = useContext(AuthContext);
    // const navigate = useNavigate();

    // const handleGoogleLogin = async () => {
    //     try {
    //         await googleSignIn()
    //         navigate("/");
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleGithubLogin = () => {
    //     githubLogin()
    //         .then(result => {
    //             console.log(result.user);
    //             navigate("/");
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setLoading(false);

    //         });
    // }

    return (
        <div className="w-full flex flex-row md:flex-col justify-between items-center gap-6 my-6">
            {/* onClick={handleGoogleLogin} */}

            {/* onClick={handleFacebookLogin} */}

            <button
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
                <FaLinkedin className="text-3xl" />
                LinkedIn
            </button>

            {/* onClick={handleGithubLogin} */}
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