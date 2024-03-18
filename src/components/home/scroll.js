import React, { useEffect } from 'react';
import './home.css';
import partner1 from '../images/partner1.png';
import partner2 from '../images/partner2.png';
import partner3 from '../images/partner3.png';
import partner4 from '../images/partner4.png';
import partner5 from '../images/partner5.png';
import partner6 from '../images/partner6.png';
import logo from '../images/whit-elogo.png';
import location from '../images/Vector.svg';
import phone from '../images/call.svg';
import mail from '../images/mail.svg';
import glob from '../images/glob.svg';

const Scroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller" data-direction="right" data-speed="slow">
      <div className="scroller__inner">
        <img src={partner1} alt="partner1" />
        <img src={partner2} alt="partner2" />
        <img src={partner3} alt="partner3" />
        <img src={partner4} alt="partner4" />
        <img src={partner5} alt="partner5" />
        <img src={partner6} alt="partner6" />

      </div>
    </div>
  );
};

export default Scroller;
