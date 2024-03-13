import React from 'react'
import "./Blog.css"
import { IoChatbubbles } from "react-icons/io5";
import Blogs1 from "../../Assets/Images/Blogs/blog1.jpg"
import Blogs2 from "../../Assets/Images/Blogs/blogs2.jpeg"
import Blogs3 from "../../Assets/Images/Blogs/blogs3.jpg"

const Blog = () => {
    return (
        <div className='Blog'>
            <div className='Blog-main'>
                <div className="blog-main-heading">
                    <div className="blog-heading">
                    <h2>News  
                        <span> & Blogs</span>
                    </h2>
                    <p>Stay informed with our latest news updates, delivering insightful stories daily. Explore our diverse blogosphere, where ideas flourish and perspectives collide.</p>
                    </div>
                    <div className="blog-main-button">
                        <p>View All</p>
                    </div>
                </div>
                <div className="blog-main-box">
                    <div className="HomeNews-box">
                        <div className="HomeNews-box-item">
                            <div className="HomeNews-box-item-head">
                                <img src={Blogs1} alt="" />
                                <div class="date">
                                    13 Mar, 2024
                                </div>
                            </div>
                        </div>
                        <div class="con">
                            <p><IoChatbubbles />Comments</p>
                            <h5>
                            The Role of Pesticides in Modern Agriculture
                            </h5>
                        </div>
                    </div>
                    <div className="HomeNews-box">
                        <div className="HomeNews-box-item">
                            <div className="HomeNews-box-item-head">
                                <img src={Blogs2} alt="" />
                                <div class="date">
                                    10 Mar, 2024
                                </div>
                            </div>
                        </div>
                        <div class="con">
                            <p><IoChatbubbles />Comments</p>
                            <h5>
                            Boost Crop Growth with Ecomax+ and Azomax Biofertilizers
                            </h5>
                        </div>
                    </div>
                    <div className="HomeNews-box">
                        <div className="HomeNews-box-item">
                            <div className="HomeNews-box-item-head">
                                <img src={Blogs3} alt="" />
                                <div class="date">
                                    8 Mar, 2024
                                </div>
                            </div>
                        </div>
                        <div class="con">
                            <p><IoChatbubbles />Comments</p>
                            <h5>
                            Empowering Agriculture | Revolutionizing Farmers through Upskilling
                            </h5>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog
