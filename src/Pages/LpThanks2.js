import React from 'react'
import Navbar from '../components/Navbar';
import Comp from '../components/Comp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function LpThanks2() {

    useEffect(() => {
        Aos.init();
      }, []);


  return (
    <div>
        <Navbar/>
        <div className="lp-thanks2-main">
            <h1 data-aos="fade-up">
                Many thanks!<br/>  
                You would be notified when light pages are released 
            </h1>
            <Link to={null} className='lp-tm-btn' data-aos="fade-up">
                Home
            </Link>
        </div>
        <Comp/> 
    </div>
  )
}
