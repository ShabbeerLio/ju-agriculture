import React, { useState } from 'react';
import "./Testimonial.css";
import { BsChatQuoteFill } from "react-icons/bs";
import Star from './Star';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonial1 from '../../Assets/plogo1.png'
import testimonial2 from '../../Assets/plogo2.png'


const Testimonials = () => {

    // const [reviews, setReviews] = useState(34)
    const [stars, setStars] = useState(4.5);

    return (
        <div className='testimonial'>
            <div className="testimonial-main">
                <div className="testimonial-left-head">
                    <p><BsChatQuoteFill /></p>
                    <span>Customers Feedback</span>
                </div>
                <div className="testimonial-main-body">
                    <div className="testimonial-main-left">
                        <h2>Trusted by farmers.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quis?</p>
                        <div className="testimonial-left-body">
                            <h2>99%</h2>
                            <p>Student's complete course successfully.</p>
                        </div>
                    </div>
                    <div className="testimonial-main-right">
                        <ReactOwlCarousel
                            loop={Infinity}
                            items={1}
                            autoplay={true}
                            autoplayTimeout={3000}
                            nav={true}
                            dots={false}
                        >
                            <div className="testimonial-right-body">
                                <div className="testimonial-right-stars">
                                    <Star stars={stars}/>
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde impedit at maiores perferendis suscipit ea, sunt iure? Voluptatibus, numquam dolores?</p>
                                <div className="testimonial-right-names">
                                    <h5>Herman miller</h5>
                                    <p>Business owner</p>
                                </div>
                            </div>
                            <div className="testimonial-right-body">
                                <div className="testimonial-right-stars">
                                    <Star  stars={stars}/>
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde impedit at maiores perferendis suscipit ea, sunt iure? Voluptatibus, numquam dolores?</p>
                                <div className="testimonial-right-names">
                                    <h5>miller Herman </h5>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </ReactOwlCarousel>
                    </div>
                </div>
                <div className="testimonial-main-foot">
                    <div className="testimonial-foot-box">
                        <img src={testimonial1} alt="" />
                        <img src={testimonial2} alt="" />
                        {/* <img src={testimonial1} alt="" />
                        <img src={testimonial2} alt="" />
                        <img src={testimonial1} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
