import React from 'react'
import './about.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import VectorWave from '../images/VectorWave.png'
import vectorWave2 from '../images/vectorWave2.png'

export const GoalPage = () => {
    return (
        <section className='goal'>
            <div className="overlap-group">
                <div className="ellipse" />
                <img className="vector-wave" alt="Vector" src={VectorWave} />
            </div>
            <Row>
                <p className='goal-head'>OUR GOALS</p>
            </Row>
            <Row>
                <p className='goal-subhead'>Protecting Your Digital <br></br>Assest Expertly</p>
            </Row>
            <Container className="d-flex justify-content-center">
                <Row style={{ marginTop: 60 }}>
                    <Col md={4}>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title style={{ color: 'white', fontWeight: 600, fontSize: 28 }}>Cyber security Assessment</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title className='custom-card-title'>Intrusion Detection <br></br> and Prevention</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title className='custom-card-title'>Incident Response <br></br>and Recovery</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <div className="overlap-group" >
                <div className="ellipse2" />
                <img className="vector-waves2" alt="Vector" src={vectorWave2} />
            </div>
        </section>

    )
}
