import React from 'react'
import "./Banner.css"

const Banner = (props) => {

    return (
        <>
            <div className='Banners' id={props.id}>
                <div className="banner-image">
                    <img src={props.cover} alt="" />
                </div>
                <div className="Banners-detail">
                    <div className="banner-title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="banner-desc">
                        <h4>{props.heading}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
