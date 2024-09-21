import React, { useState } from 'react';
import Productsnav from '../components/Productsnav';
import Comp from '../components/Comp';
import afrodigital_bg_img1 from "../assets/images/Screenshot 2023-11-17 150125 2.png";
import afrodigital_bg_img2 from "../assets/images/Screenshot 2023-11-17 150125 5.png";
import GoldArrow from "../assets/images/gold-arrow.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToTopButton from '../components/Backtotop';


export default function ProductsPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [activeLink, setActiveLink] = useState('all'); // State to track active link

  const handleLinkClick = (category) => {
    if (category === 'all') {
      setActiveLink('all');
    } else {
      setActiveLink(category);
    }
  };

  return (
    <div>
      <Productsnav />
      <div className="p-menu">
        <Link
          to={null}
          id={activeLink === 'all' ? 'pm-link-active' : ''}
          className="pm-link"
          onClick={() => handleLinkClick('all')}
        >
          All
        </Link>
        <Link
          to={null}
          id={activeLink === 'eBooks' ? 'pm-link-active' : ''}
          className="pm-link"
          onClick={() => handleLinkClick('eBooks')}
        >
          eBooks
        </Link>
        <Link
          to={null}
          id={activeLink === 'serviceAsProduct' ? 'pm-link-active' : ''}
          className="pm-link"
          onClick={() => handleLinkClick('serviceAsProduct')}
        >
          Service as a Product
        </Link>
        <Link
          to={null}
          id={activeLink === 'productSolutions' ? 'pm-link-active' : ''}
          className="pm-link"
          onClick={() => handleLinkClick('productSolutions')}
        >
          Product Solutions
        </Link>
        <Link
          to={null}
          id={activeLink === 'eCourses' ? 'pm-link-active' : ''}
          className="pm-link"
          onClick={() => handleLinkClick('eCourses')}
        >
          eCourses
        </Link>
      </div>
      <div className="products-section">
        <section style={{ display: activeLink === 'all' ? 'block' : 'none' }}>
          <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    View Product 
                </span>
                <small>
                  View Product
                </small>
              </Link>
            </div>
          </div>
          <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    Buy Book
                </span>
                <small>
                  Buy Book
                </small>
              </Link>
            </div>
          </div>
          <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    Buy Book
                </span>
                <small>
                  Buy Book
                </small>
              </Link>
            </div>
          </div>
        </section>
        <section style={{ display: activeLink === 'eBooks' ? 'block' : 'none' }}>
        <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    Buy Book
                </span>
                <small>
                  Buy Book
                </small>
              </Link>
            </div>
          </div>

        </section>
        <section style={{ display: activeLink === 'serviceAsProduct' ? 'block' : 'none' }}>
          <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    View Product
                </span>
                <small>
                  View Product
                </small>
              </Link>
            </div>
          </div>
          <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    View Product
                </span>
                <small>
                  View Product
                </small>
              </Link>
            </div>
          </div>
        </section>
        <section style={{ display: activeLink === 'productSolutions' ? 'block' : 'none' }}></section>
        <section style={{ display: activeLink === 'eCourses' ? 'block' : 'none' }}>
        <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    Get Course
                </span>
                <small>
                  Get Course
                </small>
              </Link>
            </div>
          </div>
          <div className="product-item" data-aos="fade-up">
             <div className="pi-side1">
              <figure>
                <img src={afrodigital_bg_img1} alt="" />
              </figure>
              <h1>
                Ignormania-Man killer Disease 
              </h1>
            </div>
            <div className="pi-side2">
              <p>
                ‘Biyi Aroloye is an expert transdisciplinary designer and strategist, specializing in the realms of visual design, brand strategy and digital product design-strategy. 
              </p>
              <p>
                With a track record of serving over 30 brands and executing over 1000 design projects, Biyi continues to design dreams, interpret ideas and visualize visions with a distinctive approach. 
              </p>
              <Link to="/BrandsbyBiyi">
                <span>
                    Get Course
                </span>
                <small>
                  Get Course
                </small>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <BackToTopButton/>
      <Comp />
    </div>
  );
}
