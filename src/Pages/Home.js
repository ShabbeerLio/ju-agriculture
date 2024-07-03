import React from 'react'
import "./Home.css"
import Banner from '../Component/Banner/Banner'
import BannerData from '../Component/Datas/BannerData'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Business from '../Component/Business/Business'
import Map from '../Component/Map/Map'
import ChooseUS from '../Component/ChooseUS/ChooseUS'
import Testimonials from '../Component/Testimonials/Testimonials'
import Footer2 from '../Component/Footer2/Footer2'
import Blog2 from '../Component/Blog2/Blog2'
import Wave from '../Component/Wave/Wave'
import Partners from '../Component/Partners/Partners'

const Home = () => {
    return (<>

        <div className="home">
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
            <Testimonials />
            <Partners/>
            <Business />
            <ChooseUS />
            <Footer2 />
            <Blog2 />
            <Wave />

        </div>

    </>
    )
}

export default Home
