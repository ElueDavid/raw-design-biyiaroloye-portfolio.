import React,{useState,useEffect,useRef} from 'react'
import king from "../assets/Homepage/King.svg"
import queen from "../assets/Homepage/Queen.svg"
import knight from "../assets/Homepage/Knight.svg"
import pawn from "../assets/Homepage/Pawn.svg"
import logo from "../assets/Homepage/Logo.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import lightpagesnav from "../Styles/navlightpages.module.css"

export default function Lightpagesnav({page}) {
    const [isWindowScrolled,setIsWindowScrolled] = useState(false);
    const navRef = useRef(null);
    const mobileNavRef = useRef(null);
    const navigate = useNavigate();
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    function navbarHandler(){
        setIsMobileNavbarOpen(prev => !prev)
    }
    function scrollHandler(){
        if(window.scrollY > 50){
            setIsWindowScrolled(true)
        }
        else{
            setIsWindowScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollHandler)
        return ()=>{
            window.removeEventListener("scroll", scrollHandler)
        }
    },[])


    const navHomepage = () => {
        navigate('/'); // Navigate to the homepage
    };


  return (
    <>
    <nav className={isWindowScrolled ?'desktop-nav disappear': 'desktop-nav navbar'} ref={navRef}>
        <div className='navbar-links'>
        <div className='links' onClick={()=> navigate('/biyi')}>
            <img src={queen} alt='queen'  loading='lazy'/>
        </div>
        <div className="links" onClick={()=> navigate('/portfolioPage')}>
            <img src={king} alt='king' loading='lazy'  />
        </div>
        <div className='links' onClick={navHomepage}>
            <img src={logo} alt='logo' loading='lazy' />
        </div>
        <div className='links' onClick={()=> navigate('/productpage')}>
            <img src={knight} alt='knight' loading='lazy' />
        </div>
        <div className={lightpagesnav.lightpageslink} onClick={()=> navigate('/lightpages')} id='go'>
            <img src={pawn} alt='pawn' loading='lazy' />
        </div>
        </div>
        <div className={page !== "letstalk" ? 'chat' : null} onClick={()=>navigate('/letstalk')}>
            <span id='content'>Let's</span><span>Talk</span>
        </div>
    </nav>
    <nav className={isWindowScrolled ? 'mobile-nav disappear': 'mobile-nav navbar'} ref={mobileNavRef}>
        <div className='mobile-nav-links' >
            <svg onClick={navbarHandler} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="32" height="17" viewBox="0 0 32 17" fill="none">
                <rect width="32" height="3" transform="matrix(-1 0 0 1 32 0)" fill="white"/>
                <rect width="26" height="3" transform="matrix(-1 0 0 1 26 7)" fill="white"/>
                <rect width="18" height="3" transform="matrix(-1 0 0 1 18 14)" fill="white"/>
            </svg>
            <div className='mobile-link'>
                <img src={logo} loading='lazy' onClick={()=> navigate("/")} alt='logo' />
            </div>
        </div>
        <div className={ !isMobileNavbarOpen ? 'mobile-container' : 'mobile-container open' }>
                <div className='meet'>
                    <svg onClick={()=>{navigate('/biyi')}} xmlns="http://www.w3.org/2000/svg" width="60" height="107" viewBox="0 0 60 107" fill="none">
                    <path d="M54.5833 97.25H5.41667C2.70021 97.25 0.5 99.4324 0.5 102.127C0.5 104.821 2.70021 107.004 5.41667 107.004H54.5833C57.2998 107.004 59.5 104.821 59.5 102.127C59.5 99.4324 57.2998 97.25 54.5833 97.25Z" fill="white"/>
                    <path d="M9.10417 60.3554H50.8958C53.6123 60.3554 55.8125 58.173 55.8125 55.4785C55.8125 52.784 53.6123 50.6016 50.8958 50.6016H9.10417C6.38771 50.6016 4.1875 52.784 4.1875 55.4785C4.1875 58.173 6.38771 60.3554 9.10417 60.3554Z" fill="white"/>
                    <path d="M37.375 66.0014C37.375 64.8188 37.2521 63.5874 37.375 62.3438H22.625C22.7479 63.5874 22.625 64.8188 22.625 66.0014C22.625 78.1937 15.25 95.2629 15.25 95.2629H44.75C44.75 95.2629 37.375 78.1937 37.375 66.0014Z" fill="white"/>
                    <path d="M20.7812 43.7422C19.761 43.7422 18.9375 44.8395 18.9375 46.1806C18.9375 47.5218 19.761 48.6191 20.7812 48.6191H39.2188C40.239 48.6191 41.0625 47.5218 41.0625 46.1806C41.0625 44.8395 40.239 43.7422 39.2188 43.7422H20.7812Z" fill="white"/>
                    <path d="M17.7083 41.7675H42.2917C43.6437 41.7675 44.75 40.6702 44.75 39.3291C44.75 37.9879 43.6437 36.8906 42.2917 36.8906H17.7083C16.3562 36.8906 15.25 37.9879 15.25 39.3291C15.25 40.6702 16.3562 41.7675 17.7083 41.7675Z" fill="white"/>
                    <path d="M26.3123 19.5076H33.6873L31.229 10.973L39.8332 13.4115V6.09613L31.229 8.53458L33.6873 0H26.3123L28.7707 8.53458L20.1665 6.09613V13.4115L28.7707 10.973L26.3123 19.5076Z" fill="white"/>
                    <path d="M18.9375 34.9037H41.0625C42.1319 31.7093 43.6315 29.1124 44.2215 27.6615C44.5533 26.8324 44.75 26.3691 44.75 26.3691C44.75 23.6746 38.1494 21.4922 30 21.4922C21.8506 21.4922 15.25 23.6746 15.25 26.3691C15.25 26.3691 15.4467 26.8324 15.7785 27.6615C16.3685 29.1124 17.8681 31.7093 18.9375 34.9037Z" fill="white"/>
                    </svg>
                    <p>Meet ‘Biyi</p>
                </div>
                <div className='portfolio' onClick={()=> navigate('/portfolioPage')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="107" viewBox="0 0 48 107" fill="none">
                    <path d="M5.63525 81.9609V84.9264H42.3529V81.9609C30.1218 81.9609 17.8785 81.9609 5.63525 81.9609Z" fill="black"/>
                    <path d="M40.0612 86.6562H7.93947C9.07923 97.3197 2.92695 94.1441 2.75537 102.324H45.2453C45.0738 94.1688 38.9705 97.4062 40.0612 86.6562Z" fill="black"/>
                    <path d="M0.5 104.031V106.997H47.5V104.031H0.5Z" fill="black"/>
                    <path d="M23.9936 7.14062C20.513 7.14062 14.6304 8.9817 14.6304 13.3187C14.6304 14.1837 14.9 14.9992 15.4025 15.7529C16.7261 16.2224 18.4296 15.617 18.6134 14.5667C18.6747 14.196 18.9198 13.9365 19.1894 13.8995C19.8145 13.8253 20.4272 13.7512 21.04 13.6771C21.4199 13.64 21.7386 13.9983 21.7631 14.4679C22.6455 17.3098 26.1383 15.9135 26.2241 14.4679C26.2609 13.986 26.5795 13.64 26.9717 13.6771C27.5845 13.7388 28.1973 13.813 28.7978 13.8995C29.1042 13.9365 29.337 14.2331 29.386 14.6038C29.6066 15.8023 31.5553 16.1236 32.597 15.7529C33.0872 14.9992 33.3568 14.1837 33.3568 13.3187C33.3568 8.9817 27.4742 7.14062 23.9936 7.14062Z" fill="black"/>
                    <path d="M28.2343 15.5409C27.9646 15.5038 27.6828 15.4668 27.4009 15.442C26.3346 18.3581 21.653 18.3581 20.5868 15.4297C20.3172 15.4668 20.0353 15.5038 19.7534 15.5409C18.8588 17.7403 15.6968 18.1481 14.0301 16.8507L12.3511 17.4314C14.7777 21.8055 16.3831 26.5009 16.518 31.4063C21.506 31.4063 26.494 31.4063 31.4697 31.4063C31.6168 26.5009 33.21 21.8055 35.6489 17.4314C35.0851 17.2213 34.5336 17.0236 33.9699 16.8507C32.1193 18.284 28.6877 17.8268 28.2343 15.5409Z" fill="black"/>
                    <path d="M32.438 33.1719H15.5621C13.6625 33.1719 13.7116 36.1003 15.5621 36.1003H32.438C34.3254 36.1003 34.2886 33.1719 32.438 33.1719Z" fill="black"/>
                    <path d="M12.7682 37.8281C10.8686 37.8281 10.9176 40.7565 12.7682 40.7565H35.2326C37.12 40.7565 37.0832 37.8281 35.2326 37.8281H12.7682Z" fill="black"/>
                    <path d="M11.5792 42.5156C9.67963 42.5156 9.72865 45.444 11.5792 45.444H36.4212C38.3086 45.444 38.2718 42.5156 36.4212 42.5156C28.1365 42.5156 19.864 42.5156 11.5792 42.5156Z" fill="black"/>
                    <path d="M25.7708 0.739333C24.1899 -0.842262 21.4937 0.282153 21.4937 2.51863C21.4937 4.76746 24.1899 5.89187 25.7708 4.31028C26.739 3.32178 26.739 1.72783 25.7708 0.739333Z" fill="black"/>
                    <path d="M10.856 80.2527H37.1318C33.161 69.1939 33.3939 58.3699 32.6341 47.1875H15.3537C14.5939 58.3699 14.8145 69.1939 10.856 80.2527Z" fill="black"/>
                </svg>
                    <p>Portfolio</p>
                </div>
                <div className='products' onClick={()=>{navigate("/productpage")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="107" viewBox="0 0 71 107" fill="none">
                    <path d="M68.461 103.523H10.6328C7.88597 103.523 7.9436 107.002 10.6328 107.002H68.461C71.2079 107.002 71.1503 103.523 68.461 103.523Z" fill="black"/>
                    <path d="M57.3889 74.2109C45.4986 74.2109 33.5988 74.2109 21.7085 74.2109C18.2893 74.2109 18.3662 79.6849 21.7085 79.6849C33.5988 79.6849 45.4986 79.6849 57.3889 79.6849C60.8081 79.6849 60.7313 74.2109 57.3889 74.2109Z" fill="black"/>
                    <path d="M56.1586 62.7919C51.6638 53.7983 62.4975 43.4233 57.6185 31.7899C56.975 30.2551 54.7084 27.9018 55.5536 26.3978C56.5908 24.5356 58.723 24.7914 56.6388 22.7144C50.9146 16.9948 46.9768 13.1784 39.1972 11.6334C38.2176 11.439 38.1984 11.4595 37.9967 10.4159C37.5165 7.95003 35.9509 1.2278 33.3673 0C30.486 16.207 29.9482 3.49924 22.9658 1.44267C23.4844 5.97531 29.9002 13.1887 16.4252 11.8995C16.0698 11.8688 15.8681 11.6539 15.993 12.1757C16.8766 15.4703 20.4878 14.9587 19.5082 17.046C16.598 23.1953 -0.161678 36.4044 0.520236 40.4561C0.712324 41.5918 1.62474 46.7691 2.49875 47.5774C3.21908 48.2424 4.45805 47.7923 5.38007 48.3038C6.34051 48.8359 6.7439 49.9204 7.08005 50.0944C8.76083 50.9845 10.941 47.7309 12.593 45.2548C15.0613 41.5714 14.2834 42.2876 17.7986 42.7173C22.7737 43.3312 27.6143 39.9036 29.4583 40.5175C30.3131 40.804 30.5725 41.643 30.0538 43.4131C27.912 50.6981 5.61058 68.184 21.1217 73.1259L54.5451 73.0748C67.2901 69.6062 58.5213 67.5087 56.1586 62.7919Z" fill="black"/>
                    <path d="M11.6523 102.276H67.4444V91.3385C67.4444 81.7923 55.4101 86.325 54.3056 80.8203H24.7912C23.6867 86.325 11.6523 81.7923 11.6523 91.3385V102.276Z" fill="black"/>
                </svg>
                    <p>Products</p>
                </div>
                <div className='insights' onClick={()=>{navigate("/lightpages")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="107" viewBox="0 0 57 107" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 97.1986V107H56.5V97.1986H0.5ZM50.215 93.1154V95.9725H6.78496V93.1154H50.215ZM50.215 84.9466H6.78496C4.82582 84.9466 3.23527 86.5021 3.23527 88.4179C3.23527 90.3339 4.82582 91.8894 6.78496 91.8894H50.215C52.1742 91.8894 53.7647 90.3339 53.7647 88.4179C53.7647 86.5021 52.1742 84.9466 50.215 84.9466ZM40.9767 40.8406H16.0233C16.6811 58.4338 13.7927 72.0074 7.46376 83.7206H49.5362C45.1316 75.569 42.3931 66.5157 41.3571 55.8333C41.2824 55.064 41.0118 51.1754 40.9662 49.9842C40.8547 47.0586 40.8579 44.0149 40.9767 40.8406ZM13.4665 39.6145H43.5335H43.5565C45.5049 39.6023 47.0832 38.0517 47.0832 36.143C47.0832 34.2273 45.4926 32.6718 43.5335 32.6718H13.4665C11.5074 32.6718 9.91684 34.2273 9.91684 36.143C9.91684 38.059 11.5074 39.6145 13.4665 39.6145ZM22.1439 31.4457C16.0739 28.9988 11.7962 23.1519 11.7962 16.3358C11.7962 13.4642 12.5555 10.7646 13.8882 8.41867C14.2531 7.77667 16.0406 5.43538 16.5622 4.9142C19.5953 1.88253 23.8247 0 28.5 0C37.7192 0 45.2038 7.31991 45.2038 16.3358C45.2038 23.1519 40.9261 28.9988 34.8561 31.4457H22.1439Z" fill="white"/>
                </svg>
                    <p>Light Pages</p>
                </div>
                <div className='talk'>
                    <p onClick={()=>{navigate("/letstalk")}}>Let's Talk</p>
                </div>
                <div className='cancel' onClick={navbarHandler} style={{cursor: "pointer"}}>
                    <div>
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
                    </div>
                </div>
            </div>

    </nav>
    </>
  )
}
