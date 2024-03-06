import React, { useRef } from 'react';
import './Map.css';
import MapImg from '../../Assets/Images/Map/map_img-800x433.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Map = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const countUpOptions = {
        start: 0,
        duration: 5,
        useEasing: true,
        separator: ',',
    };

    return (
        <div className="Map" ref={ref}>
            <div className="map-main">
                <div className="map-left">
                    <img src={MapImg} alt="" />
                </div>
                <div className="map-right">
                    <div className="map-right-head">
                        <h2>International hydroponic cultivation projects.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="mapright-counter">
                        <div className="counter-box">
                            <h1>{inView ? <CountUp end={20000} {...countUpOptions} /> : 0}</h1>
                            <h5>Happy Customers</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p>
                        </div>
                        <div className="counter-box">
                            <h1>{inView ? <CountUp end={25000} {...countUpOptions} /> : 0}</h1>
                            <h5>Trade Partners</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p>
                        </div>
                        <div className="counter-box">
                            <h1>{inView ? <CountUp end={5000} {...countUpOptions} /> : 0}</h1>
                            <h5>Distributors</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p>
                        </div>
                        <div className="counter-box">
                            <h1>{inView ? <CountUp end={100} {...countUpOptions} /> : 0}</h1>
                            <h5>Brands</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
