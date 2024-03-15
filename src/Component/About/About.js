import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/logo.png"
import { FaTractor, FaCheck } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import SocialMedia from '../Navbar/SocialMedia';
import { FaEnvelope } from "react-icons/fa6";
import { RiHardDrive3Line } from 'react-icons/ri';
import Partner1 from "../../Assets/plogo1.png"
import Partner2 from "../../Assets/plogo2.png"


const About = (props) => {

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

                    <div className="about-detail-box">
                        <div className="about-left">
                            <a href="#">
                                <img className="image2" src={Aboutimg} alt="" />
                            </a>
                            <div className="about-left-detail">
                                <div className="about-detail">
                                    <p>JU possesses a broad range of more than 100 products including Biological Fertilizers, Biological Pesticides, Insecticides, Fungicides, Herbicides and Bio-stimulants.</p>
                                    {/* <p> In a journey of mere two decades, the company has emerged as one of the Top Most Agrochemical Company in the Indian agricultural services sector, solidifying its position as a leading Agrochemical Company in India The company has also been recently recognized as “Great Place to Work from March 2022 to March 2023”. With its offices in all the major states of the country, the company has gained pan- India presence and caters to a network of more than 5500 trade partners and 25000 retailers. JU possesses a broad range of more than 130 products including Biological Fertilizers, Biological Pesticides, Insecticides, Fungicides, Herbicides and Bio- stimulants and has solution for all the major crops grown in the country like Paddy, Cotton, Wheat, Soybean, Pulses, Vegetables, Fruits etc. With a team of more than 1000 trained people on ground offering regular technical and advisory services, the company has also been instrumental in establishing the biological fertilizers industry in India. The organization also has deep experience in brand building and many of its brands are amongst the most trusted names in the Indian farming community today.</p> */}
                                </div>
                            </div>

                        </div>
                        <div className="about-right">
                            {/* <div className="about-right-head">
                                <div className="right-head-items">
                                    <div className="detail-heading">
                                        <p><FaTractor /></p>
                                        <h3>Domestic </h3>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus.</p>
                                </div>
                                <div className="right-head-items">
                                    <div className="detail-heading">
                                        <p><GiFruitBowl /></p>
                                        <h3>International</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga!</p>
                                </div>
                                <div className="right-head-items">
                                    <div className="detail-heading">
                                        <p><FaTractor /></p>
                                        <h3>Institutional </h3>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus.</p>
                                </div>

                            </div> */}

                            {/* <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"/> */}
                            {/* </div>
                                    <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                    </div>
                                </div>
                            </div>  */}

                        </div>
                    </div>
                    <div className="about-main-box">
                        <div className="about-right-body">
                            <div className="about-right-main">
                                {/* <div className="detail-right-heading">
                                    <h3>Our Partners</h3>
                                    <p>Collaboration is the key to lasting progress. We have partnered with globally renowned agricultural solution providers to bring the latest technology driven solutions at the doorsteps of Indian farming community.</p>
                                </div> */}
                                {/* <div className="about-right-main-partners">

                                    <div className="about-detail-left">
                                        <img src={Partner1} alt="" />
                                    </div>
                                    <div className="about-detail-left">
                                        <img src={Partner2} alt="" />
                                    </div>
                                </div> */}
                                <div className="about-detail-left">
                                    <p className='about-detail-left-icon'>
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                                    <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                                </path>
                                                <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                    <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                                    <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                                </path>
                                                <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                    <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                                    <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                                </path>
                                            </g>
                                        </svg>
                                    </p>
                                    <div className="detail-desc">
                                        <h4>Phone Call</h4>
                                        <p>0120 – 4328671</p>
                                    </div>
                                </div>
                                <div className="about-detail-left">
                                    <p className='about-detail-left-icon'>
                                        <FaEnvelope />
                                    </p>
                                    <div className="detail-desc">
                                        <h4>Email</h4>
                                        <p>info@juagrisciences.com</p>
                                    </div>
                                </div>

                            </div>
                            <div className="about-detail-right">
                                <div className="detail-right-heading">
                                    <h3>Subscribe Our Newslatter</h3>
                                    <p>Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus magnis arcu vehicula nascetur</p>
                                </div>
                                <div className="detail-desc-form">
                                    <input type="text" placeholder='Email Address' />
                                    <div className="form-btn">
                                        <p>Submit Now</p>
                                    </div>
                                </div>
                                <div className="about-social-media">
                                    <SocialMedia />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-down">
                        <div className="footer-right-quick">
                            <ul>
                                <li>
                                    <a href="#home"  >Home</a>
                                </li>
                                <li>
                                    <a href="#about"  >About Us</a>
                                </li>
                                <li>
                                    <a href="#business"  >Our Business</a>
                                </li>
                                <li>
                                    <a href="#gallery"  >Gallery</a>
                                </li>
                                <li>
                                    <a href="#careers"  >Careers</a>
                                </li>
                                <li>
                                    <a href="#blogs" >Blogs</a>
                                </li>
                                <li>
                                    <a href="#contactUs"  >Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-copyright">
                            <p>© 2024 JU Agri Sciences</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
