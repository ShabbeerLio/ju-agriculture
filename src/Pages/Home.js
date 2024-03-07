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
import Gallery from '../Component/Gallery/Gallery'
import Blog from '../Component/Blog/Blog'
import Map from '../Component/Map/Map'
import Careers from '../Component/Careers/Careers'
import Wave from '../Component/Wave/Wave'
import Footer from '../Component/Footer/Footer'
// import Services from '../Component/Services/Services'
// import ContactUs from "../Component/ContactUs/ContactUs"
// import Footer from "../Component/Footer/Footer"

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
                <Map/>
                {/* <Wave/> */}
            </section>
            <section className="section" id="about">
                {/* <About /> */}
            </section>
            <section className="section" id="business">
                <Business />
            </section>
            <section className="section" id="gallery">
                {/* <Gallery /> */}
            </section>
            <section className="section" id="careers">
                <Careers />
            </section>
            <section className="section" id="blogs">
                <Blog />
            </section>
            <section className="section" id="blogs">
                {/* <Map /> */}
            </section>
        </div>
        <About />
        {/* // <Footer /> */}
    </>
    )
}

export default Home
