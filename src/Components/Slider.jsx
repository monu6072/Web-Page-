// src/components/Slider.js
import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import image1 from "./Images/1.png";
import image2 from "./Images/2.png";
import image3 from "./Images/3.png";
import image4 from "./Images/4.png";


const images = [
    image1,image2,image3,image4
    // Add more images as needed
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const delay = 3000;

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    return (
        <div className="slider">
            <div
                className="slider__inner"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className="slider__item" key={index}>
                        <img src={image} className='rounded' alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
