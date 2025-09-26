import React, { useState } from "react";
import { galleryy } from "@/shared/images/images";

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % galleryy.length);
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + galleryy.length) % galleryy.length);
    };

    return (
        <div className="text-center row mt-5 col-10">
            <div className="col btnCarousel" onClick={prevImage}>
                <button className="btn mx-2">Назад</button>
            </div>

            <div className="d-flex justify-content-center col crousel">
                <img
                    src={galleryy[index].link}
                    alt=""
                    className="mx-2"
                    width="200px"
                    height="200px"
                />
                <img
                    src={galleryy[(index + 1) % galleryy.length].link}
                    alt=""
                    className="mx-2"
                    width="200px"
                    height="200px"
                />
                <img
                    src={galleryy[(index + 2) % galleryy.length].link}
                    alt=""
                    className="mx-2"
                    width="200px"
                    height="200px"
                />
            </div>

            <div className="col btnCarousel" onClick={nextImage}>
                <button className="btn mx-2 text-light">Вперед</button>
            </div>
        </div>
    );
}
