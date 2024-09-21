import React from 'react'
import Navbar from '../components/Navbar'
import Comp from '../components/Comp'
import afrodigital_bg_img1 from "../assets/images/Screenshot 2023-11-17 150125 2.png";
import afrodigital_bg_img2 from "../assets/images/Screenshot 2023-11-17 150125 5.png";
import afrodigital_bg_img3 from '../assets/images/Screenshot 2023-12-19 122755 1.png';
import slider_img1 from "../assets/images/sush.png";
import slider_img2 from "../assets/images/Ethical Hacking by Biyi Aroloye 1.png";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { Link } from 'react-router-dom';

import BackToTopButton from '../components/Backtotop';




export default function AfroDigital() {

 // aos initialization
 useEffect(() => {
    Aos.init();
  },[])
  // aos initialization

  return (
    <div>
        <Navbar/>
        <div className="afro-digital-header">
            <h1 data-aos="fade-up"> 
                Afro Digital
            </h1>
            <figure className="adh-image" data-aos="fade-up">
                <img src={afrodigital_bg_img3} alt="" />
            </figure>
        </div>
        {/* <div className="ad-description">
            <section data-aos="fade-right">
                <div>
                    <h4 id='add-mission'>The Brief</h4>
                    <p>
                    ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms  
                    </p>
                </div>
                <div>
                    <h4>Brand</h4>
                    <p>
                        Kujalink Africa 
                    </p>
                </div>
                <div>
                    <h4>Role</h4>
                    <p>
                        Brand Designer
                    </p>
                </div>
            </section>
            <section data-aos="fade-left">
                <div>
                    <h4>Softwares</h4>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe illustrator</li>
                        <li>Figma</li>
                        <li>After effects</li>
                        <li>Premiere Pro</li>
                    </ul>
                </div>
                <div>
                    <h4>Skills</h4>
                    <ul>
                        <li>UI/UX  design</li>
                        <li>Graphic design</li>
                        <li>Motion Design</li>
                        <li>Strategy</li>
                        <li>Presentation strategy</li>
                    </ul>
                </div>
            </section>
        </div> */}

        <div className="afro-digital-main">
            <article className="adm-section">
                <h2 className="adms-subheading" data-aos="fade-up">
                    The Strategy
                </h2>
                <div className="adms-content">
                    <p data-aos="fade-up">
                        ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms. ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms  

                    </p>
                </div>
                <figure className='adms-image' data-aos="fade-up">
                    <img src={afrodigital_bg_img2} alt="" />
                </figure>
                <figure className='adms-image' data-aos="fade-up">
                    <img src={slider_img1} alt="" />
                </figure>
                <figure className='adms-image' data-aos="fade-up">
                    <img src={slider_img2} alt="" />
                </figure>
                <figure className='adms-image' data-aos="fade-up">
                    <img src={afrodigital_bg_img1} alt="" />
                </figure>

                <Link to="/" className='adm-btn' data-aos="fade-up">
                    View Website
                    <span id='admb-span'>
                        View Website
                    </span>
                </Link>
            </article>
        </div>
        <BackToTopButton/>
        <Comp/>
    </div>
  )
}
