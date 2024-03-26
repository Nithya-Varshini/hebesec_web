import React, { useState, useEffect } from 'react';

function NumberAnimation() {
  const [animationRunning, setAnimationRunning] = useState(false);
  const [number, setNumber] = useState(0);

  // Function to start the number animation
  const increaseNumberAnimation = (endNumber, speed = 10) => {
    if (!animationRunning) {
      setAnimationRunning(true);
      incNbrRec(0, endNumber, speed);
    }
  };

  // Recursive function to increase the number
  const incNbrRec = (currentNumber, endNumber, speed) => {
    if (currentNumber <= endNumber) {
      setNumber(currentNumber);
      setTimeout(() => {
        incNbrRec(currentNumber + 1, endNumber, speed);
      }, speed);
    } else {
      setAnimationRunning(false);
    }
  };

  // Event handler for scroll
  const handleScroll = () => {
    // Replace the condition here with your desired scroll trigger
    if (window.scrollY > 200) {
      increaseNumberAnimation(100); // Start animation when scrolled past 200px
    }
  };

  // Effect hook to add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <p id="nbr">{number}</p>
      <button onClick={() => increaseNumberAnimation(100)}>Play animation</button>
    </div>
  );
}

export default NumberAnimation;
