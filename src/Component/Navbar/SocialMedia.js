import React from 'react'
import "./Navbar.css"
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa6";


const SocialMedia = () => {
    return (
        <>
            <div className="media-heading">
                <h6>Social Media</h6>
                <div className="line"></div>
            </div>
            <div className="media-items">
                <FaTwitter />
                <FaInstagram />
                <FaFacebookF />
                <FaYoutube />
                <FaLinkedinIn />
            </div>
        </>
    )
}

export default SocialMedia
