// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch('https://job-linker-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]}
                className="mySwiper ">

                <div className=''>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>

                            <div className='w-5/6 mx-auto flex flex-col justify-center items-center text-center my-6 px-20'>

                                <div className='flex justify-center items-center gap-10'>

                                    <div className="bg-[#00B4D8] h-36 rounded-full">
                                    <img src={review.image} alt={review.name}
                                        className='h-24 mt-4' />
                                    </div>
                                    
                                    <div className='text-left space-y-3'>

                                        <h4 className='text-[#00B4D8] text-4xl font-medium'>{review.name}</h4>

                                        <p className='text-[#00B4D8] text-lg font-medium'>{review.role}</p>
                                    </div>

                                </div>

                                <div className="divider divider-info"></div>

                                <Rating style={{ maxWidth: 250 }} value={review.rating} />

                                <p className='text-[#444444] text-lg my-3 italic'>  {review.details} </p>

                                <div className="divider divider-info"></div>

                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>

        </>
    );
};

export default Testimonial;