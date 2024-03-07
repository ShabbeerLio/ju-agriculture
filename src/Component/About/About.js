import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/aboutlogo.jpg"
import { FaTractor, FaCheck } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

const About = () => {

    //   useEffect(() => {
    //     const sr = ScrollReveal({
    //       origin: 'left',
    //       distance: '80px',
    //       duration: 2000,
    //       reset: true,
    //     });

    //     sr.reveal('.about-main', {})

    //     return () => sr.destroy();
    //   }, []);



    return (
        <>
            <div className="aboutUs">
                <div className="about-main">
                    <div className="about-left">
                        <div className="about-title">
                            <h2>
                                <span>J</span>
                                <span>U</span>
                                &nbsp; Agri
                                <span>Sciences</span>
                            </h2>
                        </div>
                        <div className="about-detail">
                            <p>At the turn of 21 <sup>st</sup>  century, JU Agri Sciences was conceived as a key enabler in Indian farmers pursuit of enhancing farm productivity and to produce more with limited resources sustainably.</p>
                            {/* <p> In a journey of mere two decades, the company has emerged as one of the Top Most Agrochemical Company in the Indian agricultural services sector, solidifying its position as a leading Agrochemical Company in India The company has also been recently recognized as “Great Place to Work from March 2022 to March 2023”. With its offices in all the major states of the country, the company has gained pan- India presence and caters to a network of more than 5500 trade partners and 25000 retailers. JU possesses a broad range of more than 130 products including Biological Fertilizers, Biological Pesticides, Insecticides, Fungicides, Herbicides and Bio- stimulants and has solution for all the major crops grown in the country like Paddy, Cotton, Wheat, Soybean, Pulses, Vegetables, Fruits etc. With a team of more than 1000 trained people on ground offering regular technical and advisory services, the company has also been instrumental in establishing the biological fertilizers industry in India. The organization also has deep experience in brand building and many of its brands are amongst the most trusted names in the Indian farming community today.</p> */}
                        </div>
                        <div className="about-left-detail">
                            <div className="about-detail-left">
                                <div className="detail-heading">
                                    <p><FaTractor /></p>
                                    <h3>Training & Education Hydroponic</h3>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus.</p>
                                <div className="detail-desc">
                                    <ul>
                                        <li><FaCheck />Hydroponic Systems</li>
                                        <li><FaCheck />Urban Farm Consultation</li>
                                        <li><FaCheck />Sustainable Growing Practices</li>
                                        <li><FaCheck />Training and Workshops</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="about-detail-right">
                                <div className="detail-heading">
                                    <p><GiFruitBowl /></p>
                                    <h3>Training & Education Hydroponic</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga!</p>
                                <div className="detail-desc">
                                    <ul>
                                        <li><FaCheck />Nutrient Management</li>
                                        <li><FaCheck />Customized Garden Design</li>
                                        <li><FaCheck />Disease and Pest Control</li>
                                        <li><FaCheck />Hydroponic Supplies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About