import React from 'react'
import Navbar from '../components/Navbar'
import Comp from '../components/Comp'
import GoldArrow from "../assets/images/gold-arrow.png"
import bbbheader_img from "../assets/images/dark-header-bg.png"
import Africa_icon from "../assets/images/africa-image.png"
import creditcard_icon from "../assets/images/credit-card-icon.png"
import brain_icon from "../assets/images/brain-icon.png"
import boat_img from "../assets/images/boat-image.png"
import afrodigital_bg_img1 from "../assets/images/Screenshot 2023-11-17 150125 2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import BackToTopButton from '../components/Backtotop'

import { Link } from 'react-router-dom';

export default function BrandsbyBiyi() {

    useEffect(() => {
        Aos.init();
      },[])


      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
    };


  return (
    <div className='product-det'>
        <Navbar/>
        <div className="bbb-header">
            <div className="bbb-header-content">
                <h1 data-aos="fade-up">Brands by ‘Biyi</h1>
                <p data-aos="fade-up">Premium branding  by the BrandKing</p>
                <Link to={null} data-aos="fade-up">
                    <span>
                        Consult Now 
                    </span>
                    <img src={GoldArrow} alt="" />
                </Link>
            </div>
        </div>
        <div className="why-bbb">
            <h1 className="wb-subheading" data-aos="fade-up">
                Why BBB? 
            </h1>
            <div className="wb-content">
                <section data-aos="fade-up">
                    <figure className='wbc-fig' ><img src={brain_icon} alt="" /></figure>   
                    <h4>Branded Minds</h4>
                    <p>
                        The Superior quality advisory 
                        session enables you to align 
                        yourself with a single brand vision 
                    </p>
                </section>
                <section data-aos="fade-up">
                    <figure className='wbc-fig' ><img src={Africa_icon} alt="" /></figure>
                    <h4>Branded Minds</h4>
                    <p>
                        thsis is how these things work 
                        dhahd to be very careful 
                    </p>
                </section>
                <section data-aos="fade-up">
                    <figure className='wbc-fig' ><img src={creditcard_icon} alt="" /></figure>
                    <h4>Branded Minds</h4>
                    <p>
                        The Superior quality advisory 
                        session enables you to align 
                        yourself with a single brand vision 
                    </p>
                </section>
                <section data-aos="fade-up">
                    <figure className='wbc-fig' ><img src={brain_icon} alt="" /></figure>
                    <h4>Branded Minds</h4>
                    <p>
                        The Superior quality advisory 
                        session enables you to align 
                        yourself with a single brand vision 
                    </p>
                </section>
                <section data-aos="fade-up">
                    <figure className='wbc-fig' ><img src={Africa_icon} alt="" /></figure>
                    <h4>Branded Minds</h4>
                    <p>
                        thsis is how these things work 
                        dhahd to be very careful 
                    </p>
                </section>
                <section data-aos="fade-up">
                    <figure className='wbc-fig' ><img src={creditcard_icon} alt="" /></figure>
                    <h4>Branded Minds</h4>
                    <p>
                        The Superior quality advisory 
                        session enables you to align 
                        yourself with a single brand vision 
                    </p>
                </section>
            </div>
            <div className="stand-out-section" data-aos="fad-up">
                <figure>
                    <img src={boat_img} alt="" />
                </figure>
                <div className="sos-content">
                    <h1>
                        Stand out from the crowd 
                    </h1>
                    <Link to={null} >
                        <span>
                            Learn more 
                        </span>
                        <img src={GoldArrow} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="what-client-say">
            <h1 data-aos="fade-up">
                What clients say
            </h1>
            <Slider {...settings} className='wsc-slider'>
                <div className='wsc-item' data-aos="fade-up">
                    <p>
                        This book changed my life
                        i have never read anything like it .  The way it works and how it goes. 
                    </p>
                    <h5>-Dieazni</h5>
                </div>
                <div className='wsc-item' data-aos="fade-up">
                    <p>
                        This book changed my life
                        i have never read anything like it .  The way it works and how it goes. 
                    </p>
                    <h5>-Dieazni</h5>
                </div>
                <div className='wsc-item' data-aos="fade-up">
                    <p>
                        This book changed my life
                        i have never read anything like it .  The way it works and how it goes. 
                    </p>
                    <h5>-Dieazni</h5>
                </div>
                <div className='wsc-item' data-aos="fade-up">
                    <p>
                        This book changed my life
                        i have never read anything like it .  The way it works and how it goes. 
                    </p>
                    <h5>-Dieazni</h5>
                </div>
                <div className='wsc-item' data-aos="fade-up">
                    <p>
                        This book changed my life
                        i have never read anything like it .  The way it works and how it goes. 
                    </p>
                    <h5>-Dieazni</h5>
                </div>
                
            </Slider>

            <div className="wsc-consult-section">
                <Link to={null} data-aos="fade-up" className='consult-btn'>
                    Consult
                </Link>
            </div>
        </div>
        <BackToTopButton/>
        <Comp/>
    </div>
  )
}
