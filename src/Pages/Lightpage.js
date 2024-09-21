import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Comp from '../components/Comp';
import afrodigital_bg_img1 from "../assets/images/Screenshot 2023-11-17 150125 2.png";
import tree_bg from "../assets/images/tree-background-image.png";
import GoldArrow from "../assets/images/gold-arrow.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BackToTopButton from '../components/Backtotop';

export default function Lightpage() {

    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div>
        <Navbar/>
        <div className="light-page-view">
            <section className="lpv-side1" data-aos="fade-up">
                <figure>
                    <img src={afrodigital_bg_img1} alt="" />
                </figure>
                <h1>Ignormania-Man killer Disease </h1>
                <p className='light-pages-texthov-mobile'>
                    Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                </p>
            </section>
            <form action="" >
                <p className='light-page-text'>
                    Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                </p>
                <input type="email" placeholder='Enter email address to download' data-aos="fade-up"/>
                <button type="submit" className='lp-download-btn' data-aos="fade-up">
                    Download
                </button>
            </form>
        </div>
        <BackToTopButton/>
        <Comp/>
    </div>
  )
}
