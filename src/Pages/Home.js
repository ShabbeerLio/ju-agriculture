import React from 'react'
import "./Home.css"
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/Banner/Banner'
import BannerData from '../Component/Datas/BannerData'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import About from '../Component/About/About'
import Business from '../Component/Business/Business'
import Blog from '../Component/Blog/Blog'
import Map from '../Component/Map/Map'
import ChooseUS from '../Component/ChooseUS/ChooseUS'
import Testimonials from '../Component/Testimonials/Testimonials'
import Footer2 from '../Component/Footer2/Footer2'
import FlipCards from '../Component/FlipCards/FlipCards'
import Blog2 from '../Component/Blog2/Blog2'

const Home = () => {
    return (<>
        <Navbar />
        <div className="home">
            <section className="Banner-box" id="home">
                <ReactOwlCarousel
                    loop={Infinity}
                    items={1}
                    autoplay={true}
                    autoplayTimeout={3000}
                    nav={false}
                    dots={false}
                    animateOut='fadeOut'
                    animateIn='fadeIn'
                      
                >
                    {BannerData.map((item) => (
                        <Banner
                            id={item.id}
                            cover={item.cover}
                            title={item.title}
                            heading={item.heading}
                        />
                    ))}
                </ReactOwlCarousel>
                <Map />
            </section>
            <section className="section" id="about">
                <Testimonials />
            </section>
            <section className="section" id="business">
                <Business />
            </section>
            <section className="section" id="gallery">
                <FlipCards/>
            </section>
            <section className="section" id="careers">
                <ChooseUS />
            </section>
            <section className="section" id="blogs">
                {/* <Blog /> */}
                <Blog2/>
            </section>
            <section className="section" id="blogs">
                <Footer2/>
            </section>
        </div>
        <About />
    </>
    )
}

export default Home
