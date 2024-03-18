import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './about.css';

export const AboutHead = () => {
    return (
        <div>
            <header className="about-header">
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
                                    About Us{" "}
                                </span>
                                <br />

                                <span
                                    style={{
                                        color: "white",
                                        fontSize: 64,
                                        fontFamily: "Roboto Mono",
                                        fontWeight: "700",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    Be Safe, We Make
                                    <br />
                                    System {" "}
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
                                    Secured<br />
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
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}