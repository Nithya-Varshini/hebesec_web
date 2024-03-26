import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './home.css';
import sideImage from '../images/Side.png'; 
import customize from '../images/Customize.png';
import threat from '../images/Threat.png';
import product from '../images/product.png'
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
import Scroller from './scroll';

const HomePage = () => {
    const divStyle = {
        color: '#323377',
        fontSize: 70,
        fontFamily: 'Titillium Web',
        fontWeight: 700,
        display: 'flex',
    justifyContent: 'center',
      };

      const containerStyle = { // Set the container to the full height of the viewport
        padding: '60px',
        backgroundColor: '#E6F9FB',
        margin: 0, // Set the container to the full height of the viewport
        overflowX: 'hidden',// Hide vertical overflow
        display: 'flex', // Use flexbox for layout
      };
      const leftImageStyle = {  
        height: '850px',
        width: '40%',
        position: 'relative',
        top: 0,
        left: 0,
        padding: '40px',
      };
    
      const rightContentStyle = {
        flex: 1, // Take up remaining space in the flex container
        marginLeft: '1%', // Adjust based on the desired gap
        padding: '40px', // Adjust as needed
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
      };
    
      const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
      };
    
      const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '301.5px',
        padding: '20px',
        borderRadius: '16px',
        border: '0px solid #414584',
        background: 'var(--Colour-Card, linear-gradient(97deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0.00) 54.42%, #171717 174.24%))',
        backdropFilter: 'blur(25px)',
        margin:  '20px',
      };
    
      const cardContentStyle = {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '23px',
        fontFeatureSettings: "'clig' off, 'liga' off",
        marginTop: '10px',
      };
    
      const textstyle2={
        color: '#414584', fontFamily: 'Poppins', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '23px', fontFeatureSettings: "'clig' off, 'liga' off", marginTop: '10px',
      };

      const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
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

    
    return (
      <>
        <header className="home">
          <Container className="row jumbotron d-flex content ">
            <Row>
              <Col lg={1}></Col>
              <Col className="head" lg={11} style={{ paddingLeft: "10px" }}>
                <div>
                  <span
                    style={{
                      color: "white",
                      fontSize: 64,
                      fontFamily: "Roboto Mono",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    <br />
                    We Provide{" "}
                  </span>
                  <span
                    style={{
                      color: "#F7D178",
                      fontSize: 64,
                      fontFamily: "Roboto Mono",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Cyber <br />
                  </span>
                  <span
                    style={{
                      color: "white",
                      fontSize: 64,
                      fontFamily: "Roboto Mono",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Solutions For Your
                    <br />
                    Security <br />
                  </span>
                </div>
                <div
                  style={{
                    width: 677,
                    color: "white",
                    fontSize: 24,
                    fontFamily: "Roboto Mono",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  At lectus et tristique tellus a faucibus nec pellent <br></br>
                  esque arcu.<br></br>
                  <br></br>
                </div>
                <Button
                  style={{
                    width: 200,
                    height: 50,
                    background: "#F7D178",
                    color: "white",
                    fontSize: 24,
                    fontFamily: "Roboto Mono",
                    fontWeight: "700",
                    wordWrap: "break-word",
                    borderRadius: 15,
                    border: "none",
                  }}
                >
                  Get Started
                </Button>
              </Col>
            </Row>
          </Container>
        </header>
        <br></br>
        <header
          className="head"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            verticalAlign: "center",
            alignContent: "center",
            padding: "250px 0",
          }}
        >
          <div
            style={{
              width: 1357,
              height: 339,
              position: "relative",
              transform: "rotate(-179.98deg)",
              transformOrigin: "0 0",
            }}
          >
            <div
              style={{
                width: 324,
                height: 339,
                left: 0,
                top: 0,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "rgba(37, 167, 200, 0.55)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 329,
                height: 339,
                left: -253,
                top: -0.1,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "rgba(52.99, 123.43, 141.31, 0.69)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 324,
                height: 339,
                left: -517,
                top: -0.2,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "rgba(37, 167, 200, 0.55)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 338,
                height: 339,
                left: -770,
                top: -0.3,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "rgba(53, 123, 141, 0.69)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 323,
                height: 339,
                left: -1034,
                top: -0.4,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "rgba(37, 167, 200, 0.55)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: 223,
                height: 223,
                left: -49.98,
                top: -58.02,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "#F1F1F1",
                boxShadow: "-1px 15px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                border: "1px white solid",
              }}
            />
            <div
              style={{
                width: 223,
                height: 223,
                left: -308.98,
                top: -58.12,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "#F1F1F1",
                boxShadow: "-1px 15px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                border: "1px white solid",
              }}
            />
            <div
              style={{
                width: 224,
                height: 223,
                left: -566.98,
                top: -58.22,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "#F1F1F1",
                boxShadow: "-1px 15px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                border: "1px white solid",
              }}
            />
            <div
              style={{
                width: 224,
                height: 223,
                left: -824.98,
                top: -58.32,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "#F1F1F1",
                boxShadow: "-1px 15px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                border: "1px white solid",
              }}
            />
            <div
              style={{
                width: 222,
                height: 223,
                left: -1084.98,
                top: -58.42,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
                background: "#F1F1F1",
                boxShadow: "-1px 15px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                border: "1px white solid",
              }}
            />
            <div
              style={{
                width: 52,
                height: 55,
                left: -1165.94,
                top: -149.45,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
              }}
            >Comprehensive Security Analysis</div>
            <div
              style={{
                width: 58,
                height: 62,
                left: -905.94, 
                top: -144.35,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
              }}
              src="https://via.placeholder.com/58x62"
            >Expertise & Experience</div>
            <div
              style={{
                width: 62,
                height: 66,
                left: -388.95,
                top: -143.15, 
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
              }}
            >Customized Approach</div>
            <div
              style={{
                width: 63.1,
                height: 67.3,
                left: -122.95,
                top: -143.15,
                // fontSize: 20,
                position: "absolute",
                transform: "rotate(178.46deg)",
                transformOrigin: "0 0",
              }}
            >Continuous Monitoring</div>
            <div
              style={{
                width: 61,
                height: 65,
                left: -648.94,
                top: -144.25,
                position: "absolute",
                transform: "rotate(-179.98deg)",
                transformOrigin: "0 0",
              }}
            >Cost Effectiveness</div>
          </div>
        </header>
        <br></br>

        <div style={containerStyle}>
          <div style={leftImageStyle}>
            <img
              src={sideImage}
              alt="Your Image Alt Text"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div style={rightContentStyle}>
            <div
              style={{
                color: "var(--Accent-1, #3ED5DD)",
                fontFamily: "Titillium Web",
                fontSize: "21px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              FEATURE POINT
            </div>

            <div
              style={{
                color: "#414584",
                fontFamily: "Titillium Web",
                fontSize: "67px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "70px",
                textTransform: "capitalize",
                marginTop: "10px",
              }}
            >
              Key Service Features Protecting You
            </div>

            <div
              style={{
                color: "#414584",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "23px",
                fontFeatureSettings: "'clig' off, 'liga' off",
                marginTop: "10px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum congue metus quis accumsan euismod. Maecenas sed est
              mollis, convallis nisi convallis, imperdiet massa.
            </div>

            <div style={cardContainerStyle}>
              <div style={cardStyle}>
                <img
                  src={customize}
                  alt="Customize Icon"
                  style={{ width: "64px", height: "64px" }}
                />
                <span
                  style={{
                    ...cardContentStyle,
                    alignSelf: "stretch",
                    color: "#414584",
                    fontFamily: "Titillium Web",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                >
                  Customized Security Solutions
                </span>
                <p style={textstyle2}>Additional text with specified styles.</p>
              </div>
              <div style={cardStyle}>
                <img
                  src={threat}
                  alt="Customize Icon"
                  style={{ width: "64px", height: "64px" }}
                />
                <span
                  style={{
                    ...cardContentStyle,
                    alignSelf: "stretch",
                    color: "#414584",
                    fontFamily: "Titillium Web",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                >
                  Vulnerability Assessment
                </span>
                <p style={textstyle2}>
                  {" "}
                  Additional text with specified styles.
                </p>
              </div>
              <div style={cardStyle}>
                <img
                  src={threat}
                  alt="Customize Icon"
                  style={{ width: "64px", height: "64px" }}
                />
                <span
                  style={{
                    ...cardContentStyle,
                    alignSelf: "stretch",
                    color: "#414584",
                    fontFamily: "Titillium Web",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                >
                  24/7<br></br> Incident Response
                </span>
                <p style={textstyle2}>
                  {" "}
                  Additional text with specified styles.
                </p>
              </div>
              <div style={cardStyle}>
                <img
                  src={threat}
                  alt="Customize Icon"
                  style={{ width: "64px", height: "64px" }}
                />
                <span
                  style={{
                    ...cardContentStyle,
                    alignSelf: "stretch",
                    color: "#414584",
                    fontFamily: "Titillium Web",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                >
                  User Training Programs
                </span>
                <p style={textstyle2}>
                  {" "}
                  Additional text with specified styles.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="part1">
            <div
              style={{
                color: "#323377",
                fontSize: 80,
                fontFamily: "Titillium Web",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Our Products
            </div>
            <div
              style={{
                width: "100%",
                color: "#323377",
                fontSize: 30,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum congue metus quis accumsan euismod. Maecenas sed est
              mollis, convallis nisi convallis, imperdiet massa. Proin ipsum
              nunc, lacinia ac faucibus quis, ullamcorper non metus.{" "}
            </div>
            <div
              style={{
                width: "300px",
                height: "50px",
                padding: 24,
                marginTop: "30px",
                background: "linear-gradient(299deg, #0A767B 0%, #00A7D6 100%)",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  textAlign: "center",
                  color: "white",
                  fontSize: 24,
                  fontFamily: "Titillium Web",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Viewe More
              </div>
            </div>
          </div>
          <div className="part2">
            <img style={{ width: "100%" }} src={product} />
          </div>
        </div>
        <div style={divStyle}>Achievements</div>
        <VerticalTimeline lineColor={"black"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2002 - 2006"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<StarIcon />}
          />
        </VerticalTimeline>
        <br></br>
        <div>
          <div style={divStyle}>Our Partners</div>
        </div>
        <Scroller />
        <div
          style={{ height: "40vh", background: "#11467A", display: "flex" }}
          className="foot"
        >
          <div className="foot1">
            <img src={logo} className="foot_logo" />
            <div
              style={{
                paddingLeft: "170px",
                color: "white",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              HebeSec Technologies delivers top-tier products, services, and
              cybersecurity training. Our cost-effective solutions excel in Data
              Security (DS-2) and extend across various domains. With a client
              base spanning public and private sectors, we provide end-to-end
              solutions, drawing on our extensive experience.
            </div>
            <br></br>
            <div
              style={{
                color: "white",
                fontSize: 17,
                paddingLeft: "100px",
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Copyright HebeSec Technologies Pvt. Ltd. © 2023. All rights
              reserved
            </div>
          </div>
          <div className="foot2">
            <div className="seg">
              <img src={location} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                <strong>Tamil Nadu, India<br></br></strong>Chennai<br></br>Coimbatore<br></br>Karaikudi
              </div>
            </div>
            <div className="seg">
              <img src={phone} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                +91 9566022629</div>
            </div>
            <div className="seg">
              <img src={glob} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                www.hebesec.com</div>
            </div>
            <div className="seg">
              <img src={mail} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                info@hebesec.com  </div>
            </div>
          </div>
          <div className="foot3">
            <div className="seg">
              <img src={location} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                <strong>Tamil Nadu, India<br></br></strong>Chennai<br></br>Coimbatore<br></br>Karaikudi
              </div>
            </div>
            <div className="seg">
              <img src={phone} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                +91 9566022629</div>
            </div>
            <div className="seg">
              <img src={glob} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                www.hebesec.com</div>
            </div>
            <div className="seg">
              <img src={mail} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                info@hebesec.com  </div>
            </div>
          </div>
          
        </div>
        <script>
          
        </script>
      </>
    );
};

export default HomePage;