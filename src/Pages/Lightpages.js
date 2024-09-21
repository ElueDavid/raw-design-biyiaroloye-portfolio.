import React, { useState } from 'react';
import Lightpagesnav from '../components/Lightpagesnav';
import Comp from '../components/Comp';
import afrodigital_bg_img1 from "../assets/images/Screenshot 2023-11-17 150125 2.png";
import tree_bg from "../assets/images/tree-background-image.png";
import GoldArrow from "../assets/images/gold-arrow.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BackToTopButton from '../components/Backtotop';

export default function Lightpages() {

    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div>
        <Lightpagesnav/>
        <h3 className="lightpages-subheading" data-aos="fade-up">
            Strategic Insights for Life and Business. 
        </h3>
        <div className="lightpages-main">
            <section className='lm-section'>
                <div className="lms-side1" data-aos="fade-up">
                    <figure>
                        <img src={tree_bg} alt="" />
                        <Link to="/Lightpage" className="light-pages-texthov">
                            Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                        </Link>
                    </figure>
                    <h1 className='lph1-gld'>Ignormania-Man killer Disease </h1>
                </div>
                <div className="lms-side2" data-aos="fade-up">
                    <figure>
                        <img src={afrodigital_bg_img1} alt="" />
                        <Link to="/Lightpage" className="light-pages-texthov">
                            Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                        </Link>
                    </figure>
                    <h1 className='lph1-gld'>Military Junta</h1>
                </div>
            </section>
            <section className='lm-section'>
                <div className="lms-side1" data-aos="fade-up">
                    <figure>
                        <img src={tree_bg} alt="" />
                        <Link to="/Lightpage" className="light-pages-texthov">
                            Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                        </Link>
                    </figure>
                    <h1 className='lph1-gld'>Ignormania-Man killer Disease </h1>
                </div>
                <div className="lms-side2" data-aos="fade-up">
                    <figure>
                        <img src={afrodigital_bg_img1} alt="" />
                        <Link to="/Lightpage" className="light-pages-texthov">
                            Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                        </Link>
                    </figure>
                    <h1 className='lph1-gld'>Military Junta</h1>
                </div>
            </section>
            <section className='lm-section'>
                <div className="lms-side1" data-aos="fade-up">
                    <figure>
                        <img src={tree_bg} alt="" />
                        <Link to="/Lightpage" className="light-pages-texthov">
                            Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                        </Link>
                    </figure>
                    <h1 className='lph1-gld'>Ignormania-Man killer Disease </h1>
                </div>
                <div className="lms-side2" data-aos="fade-up">
                    <figure>
                        <img src={afrodigital_bg_img1} alt="" />
                        <Link to="/Lightpage" className="light-pages-texthov">
                            Ignorance is a wicked slave master, it sends you to work without tools. This is the plague that affects mankind.
                        </Link>
                    </figure>
                    <h1 className='lph1-gld'>Military Junta</h1>
                </div>
            </section>
        </div>\
        <BackToTopButton/>
        <Comp/>
    </div>
  )
}
