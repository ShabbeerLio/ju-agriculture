import React from 'react'
import "./Business.css"
import BusinessData from '../Datas/BusinessData'
import BusinessCard from './BusinessCard'
// import ScrollReveal from 'scrollreveal'

const Business = () => {

    //   useEffect(() => {
    //     const sr = ScrollReveal({
    //       origin: 'bottom',
    //       distance: '80px',
    //       duration: 2000,
    //       reset: true,
    //     });

    //     sr.reveal('.service-box', {})

    //     return () => sr.destroy();
    //   }, []);

    const workData = [
        {
            id: 6,
            className: "boxes6",
            title: "name",
            cover:
                "https://devdiscourse.blob.core.windows.net/devnews/09_03_2023_16_36_36_6427983.jpg",
        },
        {
            id: 3,
            className: "boxes3",
            title: "name",
            cover:
                "https://www.worldbank.org/content/dam/photos/780x439/2022/feb/Paddies-image.jpg",
        },
        {
            id: 4,
            className: "boxes4",
            title: "name",
            cover:
                "https://t3.ftcdn.net/jpg/02/86/02/22/360_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg",
        },
        {
            id: 5,
            className: "boxes5",
            title: "name",
            cover:
                "https://media.licdn.com/dms/image/C5612AQGNW6vHcLjcOA/article-cover_image-shrink_720_1280/0/1617441916952?e=2147483647&v=beta&t=IJaioK1_vhUnkSq2kbq6vW7G4JPywLbyKn5ObBYIXA4",
        },
        {
            id: 2,
            className: "boxes2",
            title: "name",
            cover:
                "https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709510400&semt=sph",
        },
        {
            id: 7,
            className: "boxes7",
            title: "name",
            cover:
                "https://mnsoybean.org/wp-content/uploads/2019/03/soy-web2.jpg",
        },
        {
            id: 8,
            className: "boxes8",
            title: "name",
            cover:
                "https://indiaforensic.com/certifications/wp-content/uploads/2017/01/agriculture.jpg",
        },

    ];

    return (
        <>
            <div className="services">
                <div className="service-box">
                    <div className="WorkBox">
                        <div className="boxes1" >
                            <div className="services-cards-title">
                                <div className="title-box">
                                    <h2>Our <span>Business</span></h2>
                                    <p>The Jhaver Group is today a highly respected business group and has emerged as one of the fastest-growing innovators in South Asia.</p>
                                </div>
                            </div>
                        </div>
                        {BusinessData.map((item) => (
                            <>
                                <BusinessCard item={item} />
                            </>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Business
