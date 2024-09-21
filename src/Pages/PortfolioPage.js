import React, { useEffect, useRef, useState } from 'react';
import PortfolioNav from '../components/PortfolioNav';
import Comp from '../components/Comp';
import afrodigital_bg_img1 from '../assets/images/Screenshot 2023-11-17 150125 2.png';
import pp_header_bg from '../assets/images/Screenshot 2023-12-19 122755 1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import BackToTopButton from '../components/Backtotop';


export default function PortfolioPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  const buttonsRef = useRef([]);
  const [speedFactor, setSpeedFactor] = useState(1);

  const handleMouseMovement = (event) => {
    buttonsRef.current.forEach((button) => {
      if (button && button.parentElement) {
        const figure = button.parentElement;
        const rect = figure.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left - (button.offsetWidth / 2)) * speedFactor;
        const offsetY = (event.clientY - rect.top - (button.offsetHeight / 2)) * speedFactor;
        button.style.left = `${offsetX}px`;
        button.style.top = `${offsetY}px`;
      }
    });
  };

  const resetButtonPosition = () => {
    buttonsRef.current.forEach((button) => {
      if (button) {
        button.style.left = '0';
        button.style.top = '0';
      }
    });
  };


  const visulaGal = () => {
    window.location.href = 'https://www.behance.net/aroloyebiy8504';
  };


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
      <PortfolioNav />
      <div className="portfolio-page-header">
        <figure className="pph-image" data-aos="fade-up">
          <img src={pp_header_bg} alt="" />
        </figure>
      </div>

      <div className="pp-menu">
        <Link
          to={null}
          id={activeLink === 'all' ? 'pm-link-active' : ''}
          className="ppm-link"
          onClick={() => handleLinkClick('all')}
        >
          All
        </Link>
        <Link
          to={null}
          id={activeLink === 'eBooks' ? 'pm-link-active' : ''}
          className="ppm-link"
          onClick={() => handleLinkClick('eBooks')}
        >
          Product Design
        </Link>
        <Link
          to={null}
          id={activeLink === 'serviceAsProduct' ? 'pm-link-active' : ''}
          className="ppm-link"
          onClick={() => handleLinkClick('serviceAsProduct')}
        >
          Brand Identity & Strategy
        </Link>
        <Link
          to={null}
          id={activeLink === 'productSolutions' ? 'pm-link-active' : ''}
          className="ppm-link"
          onClick={visulaGal}
        >
          Visual Gallery
        </Link>
      </div>

      <div className="pp-articles" onMouseMove={handleMouseMovement} onMouseLeave={resetButtonPosition}>
        <section>
          <figure data-aos="fade-up" style={{ position: 'relative' }}>
            <img src={afrodigital_bg_img1} alt="" id="ppa-img-hov" />
            <Link
              to="/AfroDigital"
              className="pa-view-btn"
              ref={(el) => buttonsRef.current.push(el)}
              style={{ position: 'absolute' }}
            >
              view
            </Link>
          </figure>
          <h1 data-aos="fade-up" className='pp-h1desc'>Ignormania-Man killer Disease</h1>
        </section>
        <section>
          <figure data-aos="fade-up" style={{ position: 'relative' }}>
            <img src={afrodigital_bg_img1} alt="" id="ppa-img-hov" />
            <Link
              to="/AfroDigital"
              className="pa-view-btn"
              ref={(el) => buttonsRef.current.push(el)}
              style={{ position: 'absolute' }}
            >
              view
            </Link>
          </figure>
          <h1 data-aos="fade-up" className='pp-h1desc'>Ignormania-Man killer Disease</h1>
        </section>
      </div>
      <BackToTopButton/>
      <Comp />
    </div>
  );
}
