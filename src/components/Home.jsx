import React, { useState, useEffect } from 'react';
import ElemenDots from "../assets/img/elemen/elemen-dots.png";
import { BsInstagram, BsTelephone, BsWhatsapp } from "react-icons/bs";

import Cover1 from "../assets/img/cover/cover1.png"
import Cover2 from "../assets/img/cover/cover2.png"
import Cover3 from "../assets/img/cover/cover3.png"

function Home() {
    const slides = [
        {
            title: "Scientific Methods and Research",
            subtitle: "Science Knowledge",
            imgUrl: Cover1
        },
        {
            title: "Innovative, Technol, Solutions",
            subtitle: "Tech Innovations",
            imgUrl: Cover2
        },
        {
            title: "Global Research Network",
            subtitle: "Connecting Knowledge",
            imgUrl: Cover3
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="home" id="home">
            <div className="container">
                <div className="elemen-dots-left">
                    <img src={ElemenDots} alt="" />
                </div>
                <div className="content-home">
                    <div className="slider-wrapper">
                        <div
                            className="slides"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="slide"
                                    style={{
                                        backgroundImage: `url(${slide.imgUrl})`,
                                    }}
                                >
                                    <div className="text-top">
                                        <button>Free</button>
                                        <div className="contact">
                                            <BsInstagram />
                                            <BsWhatsapp />
                                            <BsTelephone />
                                        </div>
                                    </div>
                                    <div className="text-bottom">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.subtitle}</p>
                                        <button>See More</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="prev" onClick={prevSlide}>
                            &#10094;
                        </button>
                        <button className="next" onClick={nextSlide}>
                            &#10095;
                        </button>
                    </div>
                </div>
                <div className="elemen-dots-right">
                    <img src={ElemenDots} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
