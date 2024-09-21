import React from 'react'
import Navbar from '../components/Navbar';
import Comp from '../components/Comp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function LpTHanks() {

    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div>
        <Navbar/>
        <div className="lp-thanks-main">
            <h1 data-aos="fade-up">
                Thanks! Pages will be sent to your mail 
            </h1>
            <Link to={null} className='lp-tm-btn' data-aos="fade-up">
                Home
            </Link>
        </div>
        <Comp/>
    </div>
  )
}
