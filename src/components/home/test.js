import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Test() {
    const [animationRunning, setAnimationRunning] = useState(false);
    const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]); // Initialize with zeros
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get the position of the component relative to the viewport
            const component = document.getElementById('testComponent'); // Replace 'testComponent' with the actual ID of your component
            const componentPosition = component.getBoundingClientRect().top + window.scrollY;

            // Adjust this value to determine at what scroll position the animation triggers
            const scrollTriggerPosition = window.innerHeight * 0.75;
            if (!animationTriggered && componentPosition < window.scrollY + window.innerHeight - scrollTriggerPosition + 500) {
                setAnimationTriggered(true);
                increaseNumberAnimation([5, 100, 1500, 1000, 2000]); // Example end numbers for each item
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationTriggered]);

    const increaseNumberAnimation = (endNumbers, duration = 2000) => {
        setAnimationRunning(true);
        const newNumbers = [...numbers]; // Create a copy of numbers array

        // Calculate step increments for each number based on the duration and difference between start and end numbers
        const stepIncrements = endNumbers.map((endNumber, index) => {
            return (endNumber - numbers[index]) / duration;
        });

        // Start animation for each number
        const startTime = performance.now();
        const animate = (timestamp) => {
            const elapsedTime = timestamp - startTime;

            // Update each number based on the elapsed time and step increments
            const updatedNumbers = newNumbers.map((startNumber, index) => {
                const stepIncrement = stepIncrements[index];
                const animatedNumber = Math.min(startNumber + stepIncrement * elapsedTime, endNumbers[index]);
                return animatedNumber;
            });

            setNumbers(updatedNumbers); // Update numbers state with the new values

            // Check if animation is completed for all numbers
            if (elapsedTime < duration) {
                requestAnimationFrame(animate); // Continue animation
            } else {
                setAnimationRunning(false); // Animation completed
            }
        };

        requestAnimationFrame(animate); // Start animation loop
    };

    return (
        <div id="testComponent"> {/* Add an ID to the component */}
            <Container fluid className='bgblue p-5 justify-content-center'>
                <Row className='text-center lead text-light'>
                    <Col lg={1} sm={0}></Col>
                    <Col className='py-3' lg={2} sm={12}>
                        <p className='display-6'> {Math.round(numbers[0])}+</p>
                        Research Projects
                    </Col>
                    <Col className='py-3' lg={2} sm={12}>
                        <p className='display-6'> {Math.round(numbers[1])}+</p>
                        Recognition
                    </Col>
                    <Col className='py-3' lg={2} sm={12}>
                        <p className='display-6'> {Math.round(numbers[2])}+</p>
                        Web Application
                    </Col>
                    <Col className='py-3' lg={2} sm={12}>
                        <p className='display-6'> {Math.round(numbers[3])}+</p>
                        Satisfied Customers
                    </Col>
                    <Col className='py-3' lg={2} sm={12}>
                        <p className='display-6'> {Math.round(numbers[4])}+</p>
                        Reports Delivers
                    </Col>
                    <Col lg={1} sm={0}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Test;
