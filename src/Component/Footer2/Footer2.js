import React from 'react'
import "./Footer2.css"

const Footer2 = () => {
    return (
        <div className='footer2'>
            <div className='footer2-main'>
                <div className="footer2-left">
                    <div className="footer2-left-image">
                        <img src="https://www.theneweconomy.com/wp-content/uploads/2016/10/A051_rt.jpg" alt="" />
                    </div>
                    <div className="footer2-left-item">
                        <h2>International</h2>
                        <div className="footer2-left-item-detail">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, asperiores!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui necessitatibus dignissimos nostrum nam officiis natus veritatis incidunt laudantium excepturi assumenda.</p>
                        </div>
                    </div>
                </div>
                <div className="footer2-right">
                    <div className="footer2-right-item">
                        <div className="footer2-item-box">
                            <div className="footer2-box-text">
                                <h3>Domestic</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, recusandae.</p>
                            </div>
                        </div>
                        <div className="footer2-item-image">
                            <img src="https://www.fao.org/fileadmin/user_upload/food-agriculture-statistics/images/medium_1_FAO_PO_SYR_20220606_0009.jpg" alt="" />
                        </div>
                        {/* </div>
                    <div className="footer2-right-item"> */}
                        <div className="footer2-item-image">
                            <img src="https://lvivity.com/wp-content/uploads/2020/04/iot-in-agriculture.jpg" alt="" />
                        </div>
                        <div className="footer2-item-box">
                            <div className="footer2-box-text">
                                <h3>Intitutional</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, recusandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2
