import React, { useState, useEffect } from 'react';

import arrow_up from "../assets/images/arrow-up.svg"

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button className="back-to-top-btn" onClick={scrollToTop}>
                    <img src={arrow_up} alt="" />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
