import React from 'react';
import '../App.css';
import Slider from "react-slick";
import img1 from "../Assets/about-photo.jpg"
import img2 from "../Assets/about-photo-2.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className={"about card"}>
            <h1 className={"about-title"}>About</h1>
            <Slider {...settings} className={"about-slider"}>
                <img className={"img2"} src={img2} alt={"presentation"}/>
                <img className={"img1"} src={img1} alt={"presentation"}/>
            </Slider>
        </div>
    );
}

export default About;
