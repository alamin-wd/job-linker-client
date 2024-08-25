// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Rating from 'react-rating';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]}
                className="mySwiper ">

                <div>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>

                            <div className=' flex flex-col justify-center items-center text-center my-6 px-20'>

                                <Rating style={{ maxWidth: 250 }} value={review.rating} />

                                <FaQuoteLeft className='text-6xl my-6' />

                                <p className='text-[#444444] text-lg mb-3'>{review.details}</p>

                                <h4 className='text-[#CD9003] text-3xl font-medium'>{review.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>

        </>
    );
};

export default Testimonial;