import React from 'react'
import "./Blog2.css"
import ReactOwlCarousel from 'react-owl-carousel'

const Blog2 = () => {
    return (
        <div className='blog2'>
            <div className='blog2-main'>
                <div className="blog2-theam">
                    <span>farmer</span>
                </div>
                <div className="blog2-left">
                    <span>Luxury packages</span>
                    <h2>Our spa massage therapy packages</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, alias.</p>
                </div>
                <div className="blog2-right">
                    <div className="blog2-item-scroll">
                        <ReactOwlCarousel
                            loop={Infinity}
                            items={3}
                            autoplay={true}
                            autoplayTimeout={3000}
                            nav={true}
                            dots={false}
                            animateOut='fadeOut'
                            animateIn='fadeIn'

                        >
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/spa-image-10.webp" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <p>Button</p>
                                    <h5>Spa days are a necessity not a luxury</h5>
                                </div>
                            </div>
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/spa-image-09.webp" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <p>Button</p>
                                    <h5>Spa days are a necessity not a luxury</h5>
                                </div>
                            </div>
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/spa-image-09.webp" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <p>Button</p>
                                    <h5>Spa days are a necessity not a luxury</h5>
                                </div>
                            </div>
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/spa-image-09.webp" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <p>Button</p>
                                    <h5>Spa days are a necessity not a luxury</h5>
                                </div>
                            </div>
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog2
