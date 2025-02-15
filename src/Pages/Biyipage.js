import React, { useEffect, useRef, useState } from 'react'
import Biyipagenav from '../components/Biyipagenav'
import Comp from '../components/Comp'
import Comp2 from '../components/Comp2'
import biyi from "../assets/Biyipage/king_of_design_1.png"
import biyiMobile from "../assets/Biyipage/araloye_mobile.png"
import design from "../assets/Logo Assets/designBiyi.png"
import consult from "../assets/Logo Assets/consultingBiyi.png"
import strategy from "../assets/Logo Assets/strategyBiyi.png"
import skills_gif from '../assets/Biyipage/Tech-Stack-_-Biyi-Aroloye.gif'
import king from "../assets/Homepage/King.svg"
import queen from "../assets/Homepage/Queen.svg"
import knight from "../assets/Homepage/Knight.svg"
import arrow from "../assets/Logo Assets/Group.svg"
import { useNavigate } from 'react-router-dom'
import { Autoplay } from 'swiper/modules';
import { Swiper, div } from 'swiper/react';
import 'swiper/css';
import "../Styles/biyipage.css"

import BackToTopButton from '../components/Backtotop'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aos from 'aos';
import 'aos/dist/aos.css';



export default function Biyi() {

  useEffect(() => {
    Aos.init(
      {
        duration: 1500,
        easing: 'ease', 
      }
    );
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
};

  const navigate = useNavigate()
  const [bigScreen,setBigScreen] = useState(true)
  const meetbiyi = useRef()
  const servicesRef = useRef()

  function handleClick(){
    navigate("/letstalk")
    window.scrollTo(0,0)
  }

  function handleClick2(){
    navigate("/learnmore")
    window.scrollTo(0,0)
  }

  function checkScreenSize(){
    if(window.innerWidth >768){
      setBigScreen(true)
    }
    else{
      setBigScreen(false)
    }
  }
  useEffect(()=>{
    if(window.innerWidth >768){
      setBigScreen(true)
    }
    else{
      setBigScreen(false)
    }
    window.addEventListener("resize", checkScreenSize)
    return ()=>{
      window.removeEventListener("resize",checkScreenSize)
    }
  },[bigScreen])

  useEffect(()=>{
    const meetbiyiNode = meetbiyi.current
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            meetbiyiNode.classList.add("scrollTo")
          }
          else{
            meetbiyiNode.classList.remove("scrollTo")
          }
        },{
          treshold: 0.25
        });
      }
    );

    if (meetbiyiNode) {
      observe.observe(meetbiyiNode);
    }

    return () => {
      observe.disconnect();
    };

  },[])

  useEffect(()=>{
      const servicesRefNode = servicesRef.current;

      const observe = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              servicesRefNode.classList.add("scrollTo")
              console.log("seen")
            }
            else{
              servicesRefNode.classList.remove("scrollTo")
              console.log("seen")
            }
          },{
            treshold: 0.25
          });
        }
      );
  
      if (servicesRefNode) {
        observe.observe(servicesRefNode);
      }
  
      return () => {
        observe.disconnect();
      };
  },[])

  return (
    <div className='biyipage'>
      <Biyipagenav page={"biyi"} />
      <div ref={meetbiyi} className='meet-biyi'>
        <div  className='meet-biyi-01'>
          <img src={biyi} className='desktop-image' loading='lazy' alt='a picture of biyi aroloye' />
        </div>
        <div className='meet-biyi-02'>
          <p>
            ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, 
            specializing in the realms of brand and product design-strategy.
          </p>
          <p>
              With a track record of serving over 30 brands and executing over 1000 design projects, 
              Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive 
              approach. 
          </p>
          <p>
              His unique blend of creative intelligence and transdisciplinary background places 
              him in a league of his own among professionals in his domain.
          </p>
          <p>
            He holds a BSc in Biochemistry from the university of Lagos, complemented by various design 
            and strategy certifications. Biyi is a devoted Christian committed to advancing God’s kingdom on earth.
          </p>
          <p>
          Like a key ingredient in a recipe, Biyi is a valuable asset in any organization.
          </p>
          <div className='learnmore' onClick={handleClick2} data-aos="fade-up">
            <span>Learn more</span>
          </div>
        </div>


        <div  className='meet-biyi-01-mobile'>
          <img src={biyiMobile} className='mobile-image-mobile' loading='lazy' alt='a picture of biyi aroloye' />
        </div>
        <div className='meet-biyi-02-mobile' data-aos="fade-up">
          <p>
            ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, 
            specializing in the realms of brand and product design-strategy.
          </p>
          <p>
              With a track record of serving over 30 brands and executing over 1000 design projects, 
              Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive 
              approach. 
          </p>
          <p>
              His unique blend of creative intelligence and transdisciplinary background places 
              him in a league of his own among professionals in his domain.
          </p>
          <p>
            He holds a BSc in Biochemistry from the university of Lagos, complemented by various design 
            and strategy certifications. Biyi is a devoted Christian committed to advancing God’s kingdom on earth.
          </p>
          <p>
          Like a key ingredient in a recipe, Biyi is a valuable asset in any organization.
          </p>
        </div>
        
        
        
        <div className='learnmore-mobile' onClick={handleClick2} data-aos="fade-up">
          <span>Learn more</span>
        </div>
      </div>
      {
        bigScreen
        ?
        (<div ref={servicesRef} className='services-container'>
        <div className='design'>
          <img src={design} alt="" />
          <div className='hover-div'>
            <img className='top-image' src={king} alt='king' />
            <img className='bottom-image' src={king} alt='queen' />
            <p>Design</p>
            <p>'ur</p>
            <p>Dreams</p>
            <div onClick={handleClick} style={{cursor : "pointer"}} className='div-circle'>
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                <path d="M22.105 7.50002C22.105 7.32952 22.0019 7.10313 21.8973 6.99326L16.0027 0.730038C15.7275 0.445508 15.2816 0.412534 14.9608 0.7013C14.6739 0.959451 14.6668 1.46293 14.932 1.74326L19.6638 6.76304L0.736836 6.76304C0.329881 6.76304 -3.23774e-07 7.09292 -3.05985e-07 7.49988C-2.88197e-07 7.90683 0.329881 8.23675 0.736836 8.23675L19.6638 8.23675L14.932 13.2565C14.6668 13.5368 14.6856 14.0279 14.9608 14.2984C15.2513 14.584 15.7317 14.5586 16.0027 14.2697L21.8973 8.00653C22.0705 7.83665 22.1021 7.67303 22.105 7.50002Z" fill="#E4BB89"/>
              </svg>
            </div>
          </div>
        </div>
        <div className='strategy'>
          <img src={strategy} alt="" />
          <div className='hover-div'>
            <img className='top-image' src={queen} alt='queen' />
            <img className='bottom-image' src={queen} alt='queen' />
            <p>Achieve</p>
            <p>'ur</p>
            <p>Aim</p>
            <div  style={{cursor : "pointer"}}  onClick={handleClick} className='div-circle'>
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                <path d="M22.105 7.50002C22.105 7.32952 22.0019 7.10313 21.8973 6.99326L16.0027 0.730038C15.7275 0.445508 15.2816 0.412534 14.9608 0.7013C14.6739 0.959451 14.6668 1.46293 14.932 1.74326L19.6638 6.76304L0.736836 6.76304C0.329881 6.76304 -3.23774e-07 7.09292 -3.05985e-07 7.49988C-2.88197e-07 7.90683 0.329881 8.23675 0.736836 8.23675L19.6638 8.23675L14.932 13.2565C14.6668 13.5368 14.6856 14.0279 14.9608 14.2984C15.2513 14.584 15.7317 14.5586 16.0027 14.2697L21.8973 8.00653C22.0705 7.83665 22.1021 7.67303 22.105 7.50002Z" fill="#E4BB89"/>
              </svg>
            </div>
          </div>
        </div>
        <div className='consulting'>
          <img src={consult} alt="" />
          <div className='hover-div'>
            <img className='top-image' src={knight} alt='knight' />
            <img className='bottom-image' src={knight} alt='knight' />
            <p>Illuminate</p>
            <p>'ur</p>
            <p>Intellect</p>
            <div  style={{cursor : "pointer"}} onClick={handleClick} className='div-circle'>
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                <path d="M22.105 7.50002C22.105 7.32952 22.0019 7.10313 21.8973 6.99326L16.0027 0.730038C15.7275 0.445508 15.2816 0.412534 14.9608 0.7013C14.6739 0.959451 14.6668 1.46293 14.932 1.74326L19.6638 6.76304L0.736836 6.76304C0.329881 6.76304 -3.23774e-07 7.09292 -3.05985e-07 7.49988C-2.88197e-07 7.90683 0.329881 8.23675 0.736836 8.23675L19.6638 8.23675L14.932 13.2565C14.6668 13.5368 14.6856 14.0279 14.9608 14.2984C15.2513 14.584 15.7317 14.5586 16.0027 14.2697L21.8973 8.00653C22.0705 7.83665 22.1021 7.67303 22.105 7.50002Z" fill="#E4BB89"/>
              </svg>
            </div>
          </div>
        </div>
        </div>)
      : 
        (
          <Slider {...settings} className='biyi-swiper' data-aos="fade-up">
            <div className='design' >
              <img src={design} alt="" />
              <div className='hover-div'>
                <img className='top-image' src={king} alt='king' />
                <img className='bottom-image' src={king} alt='queen' />
                <p>Design</p>
                <p>'ur</p>
                <p>Dreams</p>
                <div style={{cursor : "pointer"}} onClick={handleClick} className='div-circle'>
                  <span>Let's Talk</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                    <path d="M22.105 7.50002C22.105 7.32952 22.0019 7.10313 21.8973 6.99326L16.0027 0.730038C15.7275 0.445508 15.2816 0.412534 14.9608 0.7013C14.6739 0.959451 14.6668 1.46293 14.932 1.74326L19.6638 6.76304L0.736836 6.76304C0.329881 6.76304 -3.23774e-07 7.09292 -3.05985e-07 7.49988C-2.88197e-07 7.90683 0.329881 8.23675 0.736836 8.23675L19.6638 8.23675L14.932 13.2565C14.6668 13.5368 14.6856 14.0279 14.9608 14.2984C15.2513 14.584 15.7317 14.5586 16.0027 14.2697L21.8973 8.00653C22.0705 7.83665 22.1021 7.67303 22.105 7.50002Z" fill="#E4BB89"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className='strategy' >
            <img src={strategy} alt="" />
            <div className='hover-div'>
              <img className='top-image' src={queen} alt='queen' />
              <img className='bottom-image' src={queen} alt='queen' />
              <p>Achieve</p>
              <p>'ur</p>
              <p>Aim</p>
                <div style={{cursor : "pointer"}}  onClick={handleClick} className='div-circle'>
                  <span>Let's Talk</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                    <path d="M22.105 7.50002C22.105 7.32952 22.0019 7.10313 21.8973 6.99326L16.0027 0.730038C15.7275 0.445508 15.2816 0.412534 14.9608 0.7013C14.6739 0.959451 14.6668 1.46293 14.932 1.74326L19.6638 6.76304L0.736836 6.76304C0.329881 6.76304 -3.23774e-07 7.09292 -3.05985e-07 7.49988C-2.88197e-07 7.90683 0.329881 8.23675 0.736836 8.23675L19.6638 8.23675L14.932 13.2565C14.6668 13.5368 14.6856 14.0279 14.9608 14.2984C15.2513 14.584 15.7317 14.5586 16.0027 14.2697L21.8973 8.00653C22.0705 7.83665 22.1021 7.67303 22.105 7.50002Z" fill="#E4BB89"/>
                  </svg>
                </div>
            </div>
            </div>
            <div className='consulting' >
            <img src={consult} alt="" />
            <div  className='hover-div'>
              <img className='top-image' src={knight} alt='knight' />
              <img className='bottom-image' src={knight} alt='knight' />
              <p>Illuminate</p>
              <p>'ur</p>
              <p>Intellect</p>
              <div style={{cursor : "pointer"}} onClick={handleClick} className='div-circle'>
                <span>Let's Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                  <path d="M22.105 7.50002C22.105 7.32952 22.0019 7.10313 21.8973 6.99326L16.0027 0.730038C15.7275 0.445508 15.2816 0.412534 14.9608 0.7013C14.6739 0.959451 14.6668 1.46293 14.932 1.74326L19.6638 6.76304L0.736836 6.76304C0.329881 6.76304 -3.23774e-07 7.09292 -3.05985e-07 7.49988C-2.88197e-07 7.90683 0.329881 8.23675 0.736836 8.23675L19.6638 8.23675L14.932 13.2565C14.6668 13.5368 14.6856 14.0279 14.9608 14.2984C15.2513 14.584 15.7317 14.5586 16.0027 14.2697L21.8973 8.00653C22.0705 7.83665 22.1021 7.67303 22.105 7.50002Z" fill="#E4BB89"/>
                </svg>
              </div>
            </div>
            </div>
        </Slider>

        )
      } 
      <div className='mb-letstalk' onClick={handleClick} data-aos="fade-up">
        Let's Talk
      </div>
      <BackToTopButton/>
      <Comp />
    </div>
  )
}

