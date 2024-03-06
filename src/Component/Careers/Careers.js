import React from 'react'
import "./Careers.css"
import { HiSpeakerphone, HiLocationMarker, HiUser, HiCalendar, HiClock } from "react-icons/hi";

const Careers = () => {
    return (
        <div className='Careers'>
            <div className='Careers-main'>
                <div className="careers-main-heading">
                    <h2>Careers
                    &nbsp;<span>with us</span>
                    </h2>
                    <p>Latin words, combined with a handful of model sentence structures.</p>
                </div>
                <div className="careers-main-card">
                    <div className="careers-main-box">
                        <div className="career-box-icon">
                            <HiSpeakerphone />
                        </div>
                        <h3>Department</h3>
                        <p>Marketing</p>
                    </div>
                    <div className="careers-main-box">
                        <div className="career-box-icon">
                            <HiLocationMarker />
                        </div>
                        <h3>Location</h3>
                        <p>Head Office Noida</p>
                    </div>
                    <div className="careers-main-box">
                        <div className="career-box-icon">
                            <HiUser />
                        </div>
                        <h3>Designation</h3>
                        <p>Product Manager (JU1358)</p>
                    </div>
                    <div className="careers-main-box">
                        <div className="career-box-icon">
                            <HiCalendar />
                        </div>
                        <h3>Posting Date</h3>
                        <p>15 Dec 2023</p>
                    </div>
                    <div className="careers-main-box">
                        <div className="career-box-icon">
                            <HiClock />
                        </div>
                        <h3>Employee Type</h3>
                        <p> Full-Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
