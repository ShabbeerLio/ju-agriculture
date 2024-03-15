import React from 'react'
import "./Flipcard.css"
import { FaAffiliatetheme } from "react-icons/fa6";

const FlipCards = () => {
    return (
        <div className='flipCard'>
            <div className='flipCard-main'>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://www.worldbank.org/content/dam/photos/780x439/2022/feb/Paddies-image.jpg" alt="" />
                            <h2>Name</h2>
                        </div>
                        <div class="flip-card-back">
                            <FaAffiliatetheme/>
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reprehenderit!</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://storage.googleapis.com/5paisa-prod-storage/files/2022-07/Agri_3.jpg" alt="Avatar" />
                            <h2>Name</h2>
                        </div>
                        <div class="flip-card-back">
                            <FaAffiliatetheme/>
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, saepe.</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://www.automation.com/getmedia/6c1cff93-a2ab-4fde-9914-86e31a411026/Agricutlure-ARC-tech-Oct-2020-web.png?width=500&height=313&ext=.png" alt="Avatar" />
                            <h2>Name</h2>
                        </div>
                        <div class="flip-card-back">
                            <FaAffiliatetheme/>
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ea.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCards
