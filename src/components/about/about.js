import React from 'react'
import './about.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { AboutHead } from './about_head';
import { GoalPage } from './goalPage';
import Scroller from '../home/scroll';
import TimelineComponent from './h_timeline.js';

export const About = () => {
    return (
        <div>
            <AboutHead />
            <GoalPage />
            <TimelineComponent />
            <section style={{ backgroundColor: 'beige   ' }}>
                <Container>
                    Timeline page
                </Container>
            </section>

            <section>
                <div style={{
                    marginTop: 100,
                    color: '#323377',
                    fontSize: 70,
                    fontFamily: 'Titillium Web',
                    fontWeight: 700,
                    display: 'flex',
                    justifyContent: 'center',
                }}>Certifications</div>
                <Scroller />
            </section>

        </div>
    )
}
