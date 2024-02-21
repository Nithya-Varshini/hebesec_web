import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './home.css';
import sideImage from '../images/Side.png'; 
import customize from '../images/Customize.png';
import threat from '../images/Threat.png';

const HomePage = () => {
    const divStyle = {
        color: '#323377',
        fontSize: 70,
        fontFamily: 'Titillium Web',
        fontWeight: 700,
        display: 'flex',
    justifyContent: 'center',
      };

      const containerStyle = {
        backgroundColor: '#E6F9FB',
        margin: 0,
        height: '100vh', // Set the container to the full height of the viewport
        overflowX: 'hidden',// Hide vertical overflow
        display: 'flex', // Use flexbox for layout
      };
      const leftImageStyle = {
        height: '103%',
        width: '30%',
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
    
    return (
        <>
            <header className='home'>
                <Container className="row jumbotron d-flex content ">
                    <Row>
                        <Col lg={1}></Col>
                        <Col className='head' lg={11} style={{ paddingLeft: "10px" }}>
                            <div><span style={{ color: 'white', fontSize: 64, fontFamily: 'Roboto Mono', fontWeight: '700', wordWrap: 'break-word' }}><br/>We Provide </span><span style={{ color: '#F7D178', fontSize: 64, fontFamily: 'Roboto Mono', fontWeight: '700', wordWrap: 'break-word' }}>Cyber <br /></span><span style={{ color: 'white', fontSize: 64, fontFamily: 'Roboto Mono', fontWeight: '700', wordWrap: 'break-word' }}>Solutions For Your<br />Security <br /></span></div>
                            <div style={{ width: 677, color: 'white', fontSize: 24, fontFamily: 'Roboto Mono', fontWeight: '700', wordWrap: 'break-word' }}>At lectus et tristique tellus a faucibus nec pellent <br></br>esque arcu.<br></br><br></br></div>
                            <Button style={{ width: 200, height: 50, background: '#F7D178', color: 'white', fontSize: 24, fontFamily: 'Roboto Mono', fontWeight: '700', wordWrap: 'break-word', borderRadius: 15, border: 'none' }}>Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </header>
            <br></br>
            <header className='head' style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 1357, height: 339, position: 'relative', transform: 'rotate(-179.98deg)', transformOrigin: '0 0' }}>
                    <div style={{ width: 324, height: 339, left: 0, top: 0, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: 'rgba(37, 167, 200, 0.55)', borderRadius: '50%' }} />
                    <div style={{ width: 329, height: 339, left: -253, top: -0.10, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: 'rgba(52.99, 123.43, 141.31, 0.69)', borderRadius: '50%' }} />
                    <div style={{ width: 324, height: 339, left: -517, top: -0.20, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: 'rgba(37, 167, 200, 0.55)', borderRadius: '50%' }} />
                    <div style={{ width: 338, height: 339, left: -770, top: -0.30, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: 'rgba(53, 123, 141, 0.69)', borderRadius: '50%' }} />
                    <div style={{ width: 323, height: 339, left: -1034, top: -0.40, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: 'rgba(37, 167, 200, 0.55)', borderRadius: '50%' }} />
                    <div style={{ width: 223, height: 223, left: -49.98, top: -58.02, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: '#F1F1F1', boxShadow: '-1px 15px 4px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '1px white solid' }} />
                    <div style={{ width: 223, height: 223, left: -308.98, top: -58.12, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: '#F1F1F1', boxShadow: '-1px 15px 4px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '1px white solid' }} />
                    <div style={{ width: 224, height: 223, left: -566.98, top: -58.22, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: '#F1F1F1', boxShadow: '-1px 15px 4px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '1px white solid' }} />
                    <div style={{ width: 224, height: 223, left: -824.98, top: -58.32, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: '#F1F1F1', boxShadow: '-1px 15px 4px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '1px white solid' }} />
                    <div style={{ width: 222, height: 223, left: -1084.98, top: -58.42, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0', background: '#F1F1F1', boxShadow: '-1px 15px 4px rgba(0, 0, 0, 0.25)', borderRadius: '50%', border: '1px white solid' }} />
                    <img style={{ width: 52, height: 55, left: -1165.94, top: -149.45, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0' }} src="https://via.placeholder.com/52x55" />
                    <img style={{ width: 58, height: 62, left: -905.94, top: -144.35, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0' }} src="https://via.placeholder.com/58x62" />
                    <img style={{ width: 62, height: 66, left: -388.95, top: -143.15, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0' }} src="https://via.placeholder.com/62x66" />
                    <img style={{ width: 63.10, height: 67.30, left: -122.95, top: -136.77, position: 'absolute', transform: 'rotate(178.46deg)', transformOrigin: '0 0' }} src="https://via.placeholder.com/63x67" />
                    <img style={{ width: 61, height: 65, left: -648.94, top: -144.25, position: 'absolute', transform: 'rotate(-179.98deg)', transformOrigin: '0 0' }} src="https://via.placeholder.com/61x65" />
                </div>
            </header>
            <br></br>
            
    <div style={containerStyle}>
      <div style={leftImageStyle}>
        <img src={sideImage} alt="Your Image Alt Text" style={{ width: '100%', height: '100%' }} />
      </div>

      <div style={rightContentStyle}>
        <div style={{ color: 'var(--Accent-1, #3ED5DD)', fontFamily: 'Titillium Web', fontSize: '21px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px' }}>
          FEATURE POINT
        </div>

        <div style={{ color: '#414584', fontFamily: 'Titillium Web', fontSize: '67px', fontStyle: 'normal', fontWeight: 600, lineHeight: '70px', textTransform: 'capitalize', marginTop: '10px' }}>
          Key Service Features Protecting You
        </div>

        <div style={{ color: '#414584', fontFamily: 'Poppins', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '23px', fontFeatureSettings: "'clig' off, 'liga' off", marginTop: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.
        </div>

        <div style={cardContainerStyle}>
          <div style={cardStyle}>
          <img src={customize} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
              Customized Security Solutions
            </span>
            <p style={textstyle2}>
              Additional text with specified styles.
            </p>

          </div>
          <div style={cardStyle}>
          <img src={threat} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
          Vulnerability Assessment
            </span>
            <p style={textstyle2}>              Additional text with specified styles.
            </p>
          </div>
          <div style={cardStyle}>
          <img src={threat} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
          24/7<br></br> Incident Response
            </span>
            <p style={textstyle2}>              Additional text with specified styles.
            </p>
          </div>
          <div style={cardStyle}>
          <img src={threat} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
          User Training Programs
            </span>
            <p style={textstyle2}>              Additional text with specified styles.
            </p>
          </div>

          <div style={{  textAlign: 'left', color: '#323377', fontFamily: 'Titillium Web', fontSize: '90px', fontStyle: 'normal', fontWeight: 700, lineHeight: '100%', letterSpacing: '-0.9px', marginTop: '30px', marginLeft: '5px' }}>
          Our Products
        </div>
        </div>
      </div>
      
    </div>
    <div style={divStyle}>
      Achievements
    </div>
            <VerticalTimeline lineColor={"black"}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    contentStyle={{ borderTop: '3px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    contentStyle={{ borderTop: '3px solid  rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    contentStyle={{ borderTop: '3px solid  rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    contentStyle={{ borderTop: '3px solid  rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    contentStyle={{ borderTop: '3px solid  rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    contentStyle={{ borderTop: '3px solid  rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2002 - 2006"
                    contentStyle={{ borderTop: '3px solid  rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //    icon={<StarIcon />}
                />
            </VerticalTimeline>



        </>
    );
};

export default HomePage;