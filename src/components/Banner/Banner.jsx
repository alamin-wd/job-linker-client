
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {

    return (

        <div className='min-h-screen'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>

                        <img src="https://i.postimg.cc/0QJjRTSm/1.png" alt="" />

                        <div className='w-full min-h-screen text-center absolute inset-0 bg-black bg-opacity-50'>

                            <div className='w-4/5 mx-auto mt-36'>
                                <h2 className="text-white text-4xl md:text-6xl font-bold">
                                    Discover Endless Opportunities in Your Career Path
                                </h2>

                                <p className='text-white my-6'>
                                    Maximize your career potential by diving into a vast array of tasks and job opportunities tailored to your skills. Explore roles that match your passions and interests, and open doors to exciting new career paths. Whether you seek full-time, part-time, or freelance work, our platform fosters professional growth and success.
                                </p>
                            </div>
                        </div>

                        <div className='absolute inset-y-2/3 w-full'>
                            <div className='w-2/3 mx-auto flex justify-center items-center gap-6 '>
                                <input
                                    type="text"
                                    placeholder="Job title, Skills, or Company"
                                    className="input input-bordered input-info w-full max-w-md" />

                                <select className="select select-info w-full max-w-md">
                                    <option disabled selected>Select City or State</option>
                                    <option>New York</option>
                                    <option>Los Angeles</option>
                                    <option>Texas</option>
                                </select>

                                <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-5 py-3 rounded-md">
                                    Search
                                </button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>

                        <img src="https://i.postimg.cc/x8DC06GZ/2.png" alt="" />

                        <div className='w-full min-h-screen text-center absolute inset-0 bg-black bg-opacity-50'>

                            <div className='w-4/5 mx-auto mt-36'>
                                <h2 className="text-white text-4xl md:text-6xl font-bold ">
                                    Connect with Employers Seeking Skilled Workers Now
                                </h2>

                                <p className='text-white my-6'>
                                    Join a growing network where employers and skilled workers come together seamlessly. Post jobs, find tasks, and build your career while forging valuable professional relationships. Whether you’re an employer looking for talent or a worker seeking new projects, our platform makes the connection easy and efficient.
                                </p>
                            </div>
                        </div>
                        <div className='absolute inset-y-2/3 w-full'>
                            <div className='w-2/3 mx-auto flex justify-center items-center gap-6 '>
                                <input
                                    type="text"
                                    placeholder="Job title, Skills, or Company"
                                    className="input input-bordered input-info w-full max-w-md" />

                                <select className="select select-info w-full max-w-xs">
                                    <option disabled selected>Select City or State</option>
                                    <option>New York</option>
                                    <option>Los Angeles</option>
                                    <option>Texas</option>
                                </select>

                                <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-5 py-3 rounded-md">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>

                        <img src="https://i.postimg.cc/wMXB3D0j/4.png" alt="" />

                        <div className='w-full min-h-screen text-center absolute inset-0 bg-black bg-opacity-60'>

                            <div className='w-4/5 mx-auto mt-36'>
                                <h2 className="text-white text-4xl md:text-6xl font-bold">
                                    Earn Rewards by Completing Simple, Quick Tasks
                                </h2>

                                <p className='text-white my-6'>
                                    Achieve your financial goals by earning rewards through quick and easy tasks. Our platform offers you the flexibility to work on your terms, wherever and whenever you want. Take control of your time and transform simple tasks into valuable earnings, without compromising your schedule or lifestyle.
                                </p>
                            </div>
                        </div>
                        <div className='absolute inset-y-2/3 w-full'>
                            <div className='w-2/3 mx-auto flex justify-center items-center gap-6 '>
                                <input
                                    type="text"
                                    placeholder="Job title, Skills, or Company"
                                    className="input input-bordered input-info w-full max-w-md" />

                                <select className="select select-info w-full max-w-xs">
                                    <option disabled selected>Select City or State</option>
                                    <option>New York</option>
                                    <option>Los Angeles</option>
                                    <option>Texas</option>
                                </select>

                                <button className="bg-[#00B4D8] hover:bg-[#48CAE4] text-white font-medium px-5 py-3 rounded-md">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;