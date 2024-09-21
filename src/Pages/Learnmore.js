import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Comp3 from '../components/Comp3'
import {useNavigate } from 'react-router-dom'
import "../Styles/learnmore.css"


const emailRegexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

export default function Learnmore() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("");
  const [validity,setValidity] = useState(true)
  const [count,setCount] = useState(0); 
  
  function handleClick(){
    const isvalid = emailRegexPattern.test(email)
    if(isvalid){
      setValidity(true);
      setCount(1);
    }
    else{
      setValidity(false);
    }
  }

  function handleClick2(){
    navigate("/")
    window.scrollTo(0,0)
  }
  return (
    <div className='learnmore-page'>
        <Navbar />
        <div className='learnmore-container'>
          { count== 1 ? 
              <div className='gracias-container'>
                <p className='gracias'>
                  Thank you! Biyi will 
                  reach out shortly.
                </p> 
              </div>
            :
              <div className='care-container'>
                <p className='care'>Care to know more?</p>
              </div>
            }
          {count == 0 
            && 
              (
                <input 
                  type='text'
                  className={validity  ? "correct" : "error"}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}} 
                  placeholder='Enter email address' 
                />
              )
          }
          {count == 1
            ? <div className='learnmore-div2' onClick={handleClick2}>
              Home
            </div>
           : (
            <div 
              className={validity ? "correct learnmore-div" : "error learnmore-div"}  
              onClick={handleClick}
            >
              Learn more
            </div>
            )
            }
        </div>
        <div className='lets-talk-copyright' >
            <p>&copy;</p>
            <p>2023</p>
      </div>
    </div>
  )
}
