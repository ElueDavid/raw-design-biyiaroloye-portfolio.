import React, { useEffect} from 'react';
import Navbar from '../components/Navbar';
import Comp from '../components/Comp';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Productemptystate() {

    useEffect(() => {
        Aos.init();
      }, []);


  return (
    <div>
        <Navbar></Navbar>
        <form className='pes-form'>
            <p data-aos="fade-up">
              We've got something cooking.
            </p>
            <input type='email' placeholder='Enter email to join the waitlist' data-aos="fade-up"/>
            <button data-aos="fade-up">
              Join
            </button>
        </form>
        <Comp></Comp>
    </div>
  )
}
