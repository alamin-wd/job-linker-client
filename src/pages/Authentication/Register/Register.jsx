
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogins from '../SocialLogin/SocialLogin';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle registration logic here
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 mt-20 py-10">

            <div className="w-5/6 mx-auto bg-[#CAF0F8] px-20 py-10 rounded-lg shadow-2xl">

                <div className='flex flex-col md:flex-row justify-center items-center gap-20 rounded-lg '>
                    <div className='bg-[#CAF0F8] w-full max-w-sm px-10 rounded-lg shadow-2xl'>

                        <form onSubmit={handleSubmit(onSubmit)}
                            className='space-y-2'>

                            <div className="form-control">

                                <label className="label">
                                    <span className="text-[#444444] text-lg font-semibold">Name</span>
                                </label>

                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered"

                                    {...register("name", { required: true })} />

                                {errors.name && <span className="text-red-600 text-sm mt-1">Name is required</span>}
                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="text-[#444444] text-lg font-semibold">Email</span>
                                </label>

                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"

                                    {...register("email", { required: true })} />

                                {errors.email && <span className="text-red-600 text-sm mt-1">Email is required</span>}
                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="text-[#444444] text-lg font-semibold">Password</span>
                                </label>

                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered"

                                    {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/
                                        })} />

                                {errors.password?.type === 'required' && <span className="text-red-600 text-sm mt-1">Password is required</span>}

                                {errors.password?.type === 'minLength' && <span className="text-red-600 text-sm mt-1">Password must be at least 6 character. </span>}

                                {errors.password?.type === 'maxLength' && <span className="text-red-600 text-sm mt-1">Password must be less than 20 character. </span>}

                                {errors.password?.type === 'pattern' && <span className="text-red-600 text-xs mt-1">Your password must contain at least one letter, one digit, one uppercase, one lowercase & one special character. </span>}

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="text-[#444444] text-lg font-semibold">Photo URl</span>
                                </label>

                                <input
                                    name="photoURL"
                                    type="url"
                                    placeholder="Photo URL"
                                    className="input input-bordered"

                                    {...register("photoURL", { required: true })} />

                                {errors.photoURL && <span className="text-red-600 text-sm mt-1">Image is required</span>}
                            </div>

                            <div>
                                <label className="block text-[#444444] text-lg font-semibold">Select Role</label>
                                <select
                                    {...register('role')}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="Worker">As a Worker</option>

                                    <option value="TaskCreator">As a Task Creator</option>
                                </select>
                            </div>

                            <div className="py-6 ">

                                <input
                                    type="submit"
                                    value="Register"
                                    className="w-full bg-[#48CAE4] hover:bg-[#00B4D8] text-white font-medium py-3 rounded-lg" />

                            </div>
                        </form>
                    </div>

                    <div className='text-center'>

                        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Register Now</h2>

                        <p className="text-lg font-medium">Already have an account? <br />
                            <Link to={"/login"}>
                                <span className="text-[#00B4D8] ms-2 font-bold hover:underline">Go Login</span>
                            </Link>
                        </p>

                        <div className="my-3">

                            <p className="text-[#444444] text-lg font-medium mt-2">Or sign up with</p>

                            {
                                <SocialLogins></SocialLogins>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
