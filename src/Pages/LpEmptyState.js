import React from 'react'
import Navbar from '../components/Navbar';
import Comp from '../components/Comp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function LpEmptyState() {

    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div>
        <Navbar/>
        <form action="" className="lp-empty-state-form">
            <h1 className="lp-es-subheading" data-aos="fade-up" >
                We ‘ve got something cooking.
            </h1>
            <input type="email" placeholder='Enter email address to download'  data-aos="fade-up" />
            <button data-aos="fade-up" >
                Join
            </button>
        </form>
        <Comp/>
    </div>
  )
}
