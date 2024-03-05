import React from 'react'
import "./Gallery.css"
import BusinessData from '../Datas/BusinessData'

const Gallery = () => {

    // const responsiveOptions = {
    //     0: {
    //         items: 1,
    //     },
    //     600: {
    //         items: 3,
    //     },
    //     1000: {
    //         items: 4,
    //     },
    // };
    return (
        <div className='Gallery'>
            <div className="gallery-main">
                <div className="gallery-heading">
                    <h2>Gallery</h2>
                </div>
                <div className="gallery-box">
                    <div className="gallery-box-slide-track">
                        {BusinessData.map((item) => (
                            <>
                                <div className="gallery-box-image " key={item.id}>
                                    <img src={item.cover} alt="" />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="gallery-box-slide-track2">
                        {BusinessData.map((item) => (
                            <>
                                <div className="gallery-box-image " key={item.id}>
                                    <img src={item.cover} alt="" />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="gallery-box-slide-track3">
                        {BusinessData.map((item) => (
                            <>
                                <div className="gallery-box-image " key={item.id}>
                                    <img src={item.cover} alt="" />
                                </div>
                            </>
                        ))}
                    </div>
                    {/* <ReactOwlCarousel
                        loop={Infinity}
                        items={4}
                        autoplay={true}
                        autoplaySpeed={1000}
                        responsive={responsiveOptions}
                    > */}

                    {/* </ReactOwlCarousel> */}
                </div>
            </div>
        </div>
    )
}

export default Gallery
