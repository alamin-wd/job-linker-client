import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <div className="w-full bg-gradient-to-r from-[#ADE8F4] to-[#CAF0F8] py-10">

            <div className="flex justify-between items-start gap-20 p-10 ">

                <nav className="w-1/3">
                    {/* Website name/logo */}
                    <Link to={'/'}>
                        <button className="text-2xl md:text-4xl text-[#03045E] font-bold">
                            Job Linker
                        </button>
                    </Link>

                    <p className="text-gray-500 mt-3 mb-6">
                        Connecting job seekers and employers with ease. Find opportunities, complete tasks, and grow with our trusted platform.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link to={'https://www.facebook.com'}>
                            <button>
                                <FaFacebookSquare className="text-2xl text-blue-700" />
                            </button>
                        </Link>

                        <Link to={'https://bd.linkedin.com'}>
                            <button>
                                <FaLinkedin className="text-2xl text-blue-700" />
                            </button>
                        </Link>

                        <Link to={'https://bd.linkedin.com'}>
                            <button>
                                <FaGithub className="text-2xl " />
                            </button>
                        </Link>

                    </div>
                </nav>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between footer">
                    <nav>
                        <h5 className="footer-title">For Workers</h5>

                        <a className="link link-hover">Dashboard</a>
                        <a className="link link-hover">Browse Jobs</a>
                        <a className="link link-hover">Browse Categories</a>
                        <a className="link link-hover">Job Alerts</a>
                    </nav>

                    <nav>
                        <h5 className="footer-title">For Task Creators</h5>
                        <a className="link link-hover">Dashboard</a>
                        <a className="link link-hover">Browse Candidates</a>
                        <a className="link link-hover">Post a Job</a>
                        <a className="link link-hover">Post a Task</a>

                    </nav>

                    <nav>
                        <h5 className="footer-title">Categories</h5>
                        <a className="link link-hover">Web Design</a>
                        <a className="link link-hover">Web Development</a>
                        <a className="link link-hover">Digital Marketing</a>
                        <a className="link link-hover">Graphics Design</a>
                    </nav>

                    <nav>
                        <h5 className="footer-title">Useful Links</h5>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Terms of Use</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </nav>
                </div>
            </div>

            <div className="w-1/2 mx-auto text-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span>
                    <Link to={'/'}>
                        Job Linker
                    </Link>
                </span></p>
            </div>

        </div>

    );
};

export default Footer;