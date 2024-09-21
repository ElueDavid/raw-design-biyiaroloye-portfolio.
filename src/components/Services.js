import React from 'react'
import "../Styles/services.css"

export default function Services({servicesState,func}) {
  return (
    <div className={ servicesState ? 'servicess-container moved' : 'servicess-container'}>
        {/* <svg onClick={()=>func(false)} className='cancel-svg' xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M17 0C7.61175 0 0 7.61175 0 17C0 26.3882 7.61175 34 17 34C26.3882 34 34 26.3882 34 17C34 7.61175 26.3882 0 17 0ZM24.7917 22.7857L22.8041 24.7917L17.0099 18.989L11.1987 24.7917L9.20833 22.8012L15.0068 17.0042L9.20833 11.1987L11.1987 9.20833L16.9901 15.0011L22.7857 9.20833L24.7917 11.1959L18.9947 16.9858L24.7917 22.7857Z" fill="black"/>
        </svg> */}
        <div className='design-container'>
            <div className='design-container-title'>
                <p className='container-subheadingg'>Design</p>
            </div>
            <div className='design-container-body'>
                <input type="checkbox"  id='visual-design '/>
                <label htmlFor='visual-design '>Visual Design </label><br />
                <input type="checkbox"  id='ui-ux-design'/>
                <label htmlFor='ui-ux-design'>UI/UX Design</label><br />
                <input type="checkbox"  id='presentation-design '/>
                <label htmlFor='presentation-design '>Presentation Design</label><br />
                <input type="checkbox"  id='experience-design'/>
                <label htmlFor='experience-design'>Experience Design</label><br />
                <input type="checkbox"  id='interaction-design'/>
                <label htmlFor='interaction-design'>Interaction Design</label><br />
            </div>
        </div>
        <div className='strategy-container'>
            <div className='strategy-container-title'>
                <p className='container-subheadingg'>Strategy</p>
            </div>
            <div className='strategy-container-body'>
                <input type="checkbox"  id='brand-strategy'/>
                <label htmlFor='brand-strategy'>Brand Strategy</label><br />
                <input type="checkbox"  id='product-strategy'/>
                <label htmlFor='product-strategy'>Product Strategy</label><br />
                <input type="checkbox"  id='product-ideation'/>                
                <label htmlFor='product-ideation'>Product Ideation</label><br />
            </div>
        </div>
        <div className='consulting-container'>
            <div className='consulting-container-title'>
                <p className='container-subheadingg'>Consulting</p>
            </div>
            <div className='consulting-container-body'>
                <div>
                    <input type="checkbox"  id='brand-product-consulting'/>
                    <label htmlFor='brand-product-consulting'>Brand & Product consulting</label>
                </div>
                <div>
                    <input type="checkbox"  id='brand-training'/>
                <label htmlFor='brand-training'>Brand training for staff & stakeholders</label>
                </div>
                <input type="checkbox"  id='purpose-discovery'/>                
                <label htmlFor='purpose-discovery'>Purpose Discovery</label><br />
            </div>
        </div>
        <div className='services-action-btns'>
            <span onClick={()=>func(false)}>Submit</span>
            <span onClick={()=>func(false)}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_706_2891)">
                        <path d="M24 3.752L19.577 0L11.806 9.039L4.159 0.031L0 4.309C2.285 7.194 5.284 10.212 8.362 13.017L0.197 22.464L1.54 23.951C3.518 22.616 7.521 19.578 11.745 15.993C16.049 19.663 20.051 22.656 21.974 23.999L23.423 22.721L15.169 12.997C18.456 10.024 21.753 6.643 24 3.752Z" fill="#E00F0F"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_706_2891">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                </svg>
            </span>
        </div>
    </div>
  )
}
