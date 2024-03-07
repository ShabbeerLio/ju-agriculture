import React from 'react'
import "./Footer.css"
import footerLogo from "../../Assets/footerlogo.png"
import shade from "../../Assets/Images/vegetable.png"

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer-main">
                <div className="footer-main-left">
                    <div className="footer-left-logo">
                        <img src={footerLogo} alt="" />
                    </div>
                    <div className="footer-left-title">
                        <h1>Subscribe Our Newsletter</h1>
                        <p>Expect a friendly letter from us once a week. No spam.</p>
                    </div>
                    <div className="footer-left-form">
                        <form action="">
                            <input type="text" placeholder='Enter your email address' />
                            <p>Subscribe</p>
                        </form>
                    </div>
                </div>
                <div className="footer-main-right">
                    <div className="footer-right-quick">
                        <h3>Quick Link</h3>
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
                    <div className="footer-right-follow">
                    <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <a href="">Facebook</a>
                            </li>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                            <li>
                                <a href="">Instagram</a>
                            </li>
                            <li>
                                <a href="">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right-contact">
                    <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <a href="01204328671">0120 – 4328671</a>
                            </li>
                            <li>
                                <a href="">support@gmail.com</a>
                            </li>
                            <li>
                                <a href="">JU Agri Sciences Pvt. Ltd. Unit No.2302, Tower 2, Express Trade Tower II B 36, Sector 132, Noida, Gautam Buddha Nagar Uttar Pradesh 201301</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
