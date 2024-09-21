import React from 'react'
import Navbar from '../components/Navbar'
import Comp from '../components/Comp'
// import Comp2 from '../components/Comp2'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img1 from "../assets/images/sush.png";
import slider_img2 from "../assets/images/Fine_Wine_by_Biyi_Aroloye.png";
import slider_img3 from "../assets/images/urban_party.png";
import slider_img4 from "../assets/images/Dream-Team-by-Biyi-Aroloye.png";
import slider_img5 from "../assets/images/Olysah_biyi.png";
import slider_img6 from "../assets/images/Ethical Hacking by Biyi Aroloye 1.png";
import slider_img7 from "../assets/images/Apems_by_Biyi_Aroloye.png";
import slider_img8 from "../assets/images/the_awakening.png";

export default function () {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

  return (
    <div>
        <Navbar/>
        <div className="visual-gallery-space">
            <h1 className="vg-subheading">
                Crafts of the 
                <span> King</span>
            </h1>
            <Slider {...settings} className='vg-slider'>
                <div>
                    <img src={slider_img1} alt="" />
                </div>
                <div>
                    <img src={slider_img2} alt="" />
                </div>
                <div>
                    <img src={slider_img3} alt="" />
                </div>
                <div>
                    <img src={slider_img4} alt="" />
                </div>
                <div>
                    <img src={slider_img5} alt="" />
                </div>
                <div>
                    <img src={slider_img6} alt="" />
                </div>
                <div>
                    <img src={slider_img7} alt="" />
                </div>
                <div>
                    <img src={slider_img8} alt="" />
                </div>
            </Slider>
        </div>
        <Comp/>
    </div>
  )
}
