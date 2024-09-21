import React from 'react'
import LogoSlider from '../components/LogoSlider';
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

export default function Testpage() {

    const logos = [
        logo1, 
        logo2, 
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo9,
        logo10,
        logo11]; // Add more logos as needed


  return (
    <div>
      <h1>Auto-Scrolling Logo Slider</h1>
      <LogoSlider logos={logos} />
    </div>
  )
}
