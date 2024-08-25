import Banner from "../../../components/Banner/Banner";
import Features from "../Features/Features";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {

    return (

        <div className="max-w-full mx-auto">

            <Banner></Banner>

            {/* Features Section */}
            <section className="w-11/12 mx-auto my-10">
                <Features></Features>
            </section>

            {/* How it works Section */}
            <section className="w-11/12 mx-auto my-10 ">
                <HowItWorks></HowItWorks>
            </section>

            {/* Top Earners Section */}
            <section className="w-11/12 mx-auto my-10">

            </section>

            {/* Testimonial Section */}
            <section className="w-11/12 mx-auto my-10">
                <Testimonial></Testimonial>
            </section>

        </div>
    );
};

export default Home;