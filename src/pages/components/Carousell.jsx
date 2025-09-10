import React, { useState } from "react";

export default function Carousel() { 
    const links = [
        { link: "/images/img1.png" },
        { link: "/images/img2.png" },
        { link: "/images/img3.png" },
        { link: "/images/img4.png" },
        { link: "/images/img5.png" },
        { link: "/images/img6.png" },
    ];

    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % links.length);
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + links.length) % links.length);
    };

    return (
        <div className="text-center row mt-5 col-10">
            <div className="col btnCarousel" onClick={prevImage} >
                <button className="btn  mx-2">Назад</button>
            </div>
            <div className="d-flex justify-content-center col crousel">
                <img src={links[index].link} alt=" " className="mx-2" width='200px' height='200px'/>
                <img src={links[(index + 1) % links.length].link} alt=" " className="mx-2" width='200px' height='200px'/>
                <img src={links[(index + 2) % links.length].link} alt=" " className="mx-2" width='200px' height='200px'/>
            </div>
            <div className="col btnCarousel" onClick={nextImage} >
                <button className="btn mx-2 text-light">Вперед</button>
            </div>
        </div>
    );
}
