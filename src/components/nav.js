import { Outlet, Link } from "react-router-dom";
import logo from ".//images/whit-elogo.png";
import newImage from ".//images/new1.png";
import './nav.css';
import { useEffect, useState } from 'react';

function Nav() {
  const [logoSrc, setLogoSrc] = useState(logo);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && logoSrc !== newImage) {
        setLogoSrc(newImage); // Change to the second image when scrolled
      } else{
        setLogoSrc(logo); // Change back to the first image when not scrolled
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar');
    var texts = document.querySelectorAll('.wow');
    if (header && texts) {
      if (window.scrollY > 0 && texts.length > 0) {
        header.classList.add('header-scroll');
        texts.forEach(function(text) {
          text.classList.add('text-scroll');
        });
        // Change image source on scroll
        // Replace 'new_image_src_on_scroll.jpg' with the actual image source
      } else {
        header.classList.remove('header-scroll');
        texts.forEach(function(text) {
          text.classList.remove('text-scroll');
        });
        // Reset image source when not scrolled
        // Replace 'original_image_src.jpg' with the original image source
      }
    }
  });

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style={{ height: "70px" }}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand ms-auto" href="/"><img
              src={logoSrc}
              width="auto"
              height="60"
              margin-top="3"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></a>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2" style={{ fontSize: "20px" }}><Link className="wow" to="/resume">ABOUT US</Link></li>
              <li className="nav-item mx-2" style={{ fontSize: "20px" }}><Link className="wow" to="/contact">SERVICES</Link></li>
              <li className="nav-item mx-2" style={{ fontSize: "20px" }}><Link className="wow" to="/resume">R&D CENTER</Link></li>
              <li className="nav-item mx-2" style={{ fontSize: "20px" }}><Link className="wow" to="/resume">CONTACT US</Link></li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
