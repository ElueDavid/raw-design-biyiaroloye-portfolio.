import React from 'react'
import logo1 from "../assets/Logo Assets/LOcalization Lab 1.svg"
import logo2 from "../assets/Logo Assets/policyLAB-green-text-Horizontal (3) 1.svg"
import logo3  from "../assets/Logo Assets/Africa-Prudentia.svg"
import logo4  from "../assets/Logo Assets/Kujalink 1.svg"
import logo5  from "../assets/Logo Assets/NIIT 1.svg"
import logo6  from "../assets/Logo Assets/Digital fortress.svg"
import logo7  from "../assets/Logo Assets/Lagos State 1.svg"
// import logo8  from "../assets/Homepage/Namelogo.svg"
import logo9  from "../assets/Logo Assets/Tetratinu.svg"
import logo10  from "../assets/Logo Assets/Kite.svg"
import logo11  from "../assets/Logo Assets/UNDP.svg"

export default function LogoSlider() {
  return (
    <div>
      <div className="logos">
        <div className="logos-slide">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} className='logo-scale-down' alt="" />
          <img src={logo4} className='logo-scale-down' alt="" />
          <img src={logo5} className='logo-scale-down' alt="" />
          <img src={logo6} className='logo-scale-down' alt="" />
          <img src={logo7} alt="" />
          <img src={logo9} alt="" />
          <img src={logo10} alt="" />
          <img src={logo11} alt="" />

        </div>
        
        {/* <div className="logos-slide">
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo10} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo1} alt="" />
          <img src={logo7} alt="" />
          <img src={logo9} alt="" />
          <img src={logo10} alt="" />

        </div> */}
      </div>
    </div>
  )
}
