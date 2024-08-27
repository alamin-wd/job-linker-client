
import Swal from 'sweetalert2';
import SocialLogins from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';

const Login = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = async event => {
        event.preventDefault();
       

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await login(email, password);
            const user = result.user;
            console.log(user);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "You Have Successfully Logged In",
                showConfirmButton: false,
                timer: 1000
              });

            navigate(from, {replace: true});
        }
        catch (error) {
            console.error("Sign-in failed:", error);
        }
       
    };

    return (
        <div className="flex justify-center items-center mt-20 py-10">

            <div className="w-5/6 mx-auto bg-[#CAF0F8] px-20 py-10 rounded-lg shadow-2xl">

                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Login Now</h2>

                <div className='flex flex-col md:flex-row justify-center items-center gap-20 rounded-lg '>

                    <div className='bg-[#CAF0F8] w-full max-w-sm px-10 rounded-lg shadow-2xl'>

                        <form onSubmit={handleLogin}
                            className='space-y-2'>

                            <div className="form-control">

                                <label className="label">
                                    <span className="text-[#444444] text-lg font-semibold">Email</span>
                                </label>

                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="text-[#444444] text-lg font-semibold">Password</span>
                                </label>

                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered" />

                            </div>

                            <div className="py-6 ">

                                <input
                                    type="submit"
                                    value="Login"
                                    className="w-full bg-[#48CAE4] hover:bg-[#00B4D8] text-white font-medium py-3 rounded-lg" />

                            </div>
                        </form>

                        <div className='text-center mb-6'>
                            <p className="text-lg font-medium">Do not have an account? <br />
                                <Link to={"/register"}>
                                    <span className="text-[#00B4D8] ms-2 font-bold hover:underline">Go Register</span>
                                </Link>
                            </p>
                        </div>

                    </div>

                    {/* Social Logins */}
                    <div className="text-center my-3">

                        <p className="text-[#444444] text-lg font-medium mt-2">Or Continue with</p>

                        {
                            <SocialLogins></SocialLogins>
                        }
                    </div>

                </div>
            </div>

            <div>
                <Helmet>
                    <title>Login - Job Linker</title>
                </Helmet>
            </div>
        </div>
    );
};

export default Login;
