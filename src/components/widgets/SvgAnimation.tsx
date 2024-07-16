'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../../assets/styles/svg_animation.css';

const SvgAnimation = () => {
  const mainSVGRef = useRef(null);
  const boxRef = useRef(null);
  const connectorRef = useRef(null);
  const draggerRef = useRef(null);
  const graphDotRef = useRef(null);
  const boxLabelRef = useRef(null);
  const nullDotRef = useRef(null);
  const graphLineRef = useRef(null);
  const [isPressed, setIsPressed] = useState(false); // State to track whether the element is pressed

  useEffect(() => {
    const mainSVG = mainSVGRef.current;
    const box = boxRef.current;
    const connector = connectorRef.current;
    const dragger = draggerRef.current;
    const graphDot = graphDotRef.current;
    const boxLabel = boxLabelRef.current;
    const nullDot = nullDotRef.current;
    const graphLine = graphLineRef.current;

    if (!mainSVG || !box || !connector || !dragger || !graphDot || !boxLabel || !nullDot || !graphLine) {
      return; // If any of the refs are null, return to prevent further execution
    }

    mainSVG.style.visibility = 'visible';

    // Set transform origins
    [dragger, graphDot, nullDot].forEach((element) => {
      element.style.transformOrigin = '50% 50%';
    });

    box.style.transformOrigin = '50% 100%';

    // Animation variables
    let tl = {
      progress: 0.000001,
      update: updateGraph,
    };

    function updateTimeline() {
      let perc = nullDot._gsTransform.x / 770;
      // Update timeline progress manually
      tl.progress = perc;
      updateGraph();
    }

    function updateGraph() {
      let boxPos = {
        x: dragger._gsTransform.x - box.getBBox().width / 2,
        y: dragger._gsTransform.y - box.getBBox().height * 3,
      };

      // Update box position
      box.setAttribute('transform', `translate(${boxPos.x},${boxPos.y})`);

      // Update box label
      boxLabel.textContent = String(parseInt(String(600 - dragger._gsTransform.y)) - 118);
    }

    function graphPress() {
      setIsPressed(true); // Set isPressed to true when the element is pressed

      // Animation for dragger
      dragger.setAttribute('r', 30);

      // Animation for connector
      connector.setAttribute('x1', dragger._gsTransform.x);
      connector.setAttribute('x2', dragger._gsTransform.x);
      connector.setAttribute('y1', box._gsTransform.y + 20);
      connector.setAttribute('y2', dragger._gsTransform.y);

      // Animation complete callback for connector
      setTimeout(() => {
        connector.setAttribute('x1', box._gsTransform.x + 40);
        connector.setAttribute('x2', box._gsTransform.x + 40);
        connector.setAttribute('y1', box._gsTransform.y + 20);
        connector.setAttribute('y2', graphDot._gsTransform.y);

        // Animation for box
        box.style.transform = `scale(1) translate(${box._gsTransform.x},${box._gsTransform.y})`;
      }, 600);
    }

    function graphRelease() {
      setIsPressed(false); // Set isPressed to false when the element is released

      // Animation for dragger
      dragger.setAttribute('r', 15);

      // Animation for box
      box.style.transform = `scale(0) translate(${box._gsTransform.x},${box._gsTransform.y + 30})`;
    }

    // Initialize timeline
    let introTl = {
      onComplete: init,
      delay: 1000,
    };

    function init() {
      // Draggable initialization
      nullDot.addEventListener('mousedown', graphPress);
      document.addEventListener('mousemove', updateTimeline);
      document.addEventListener('mouseup', graphRelease);

      // Ticker initialization (if needed for animation updates)
      // gsap.ticker.addEventListener('tick', connectLine);
      // graphRelease();
    }

    // Connect line function (if needed)
    function connectLine() {
      if (isPressed) {
        // Set connector attributes
        connector.setAttribute('x1', box._gsTransform.x + 40);
        connector.setAttribute('x2', box._gsTransform.x + 40);
        connector.setAttribute('y1', box._gsTransform.y + 43);
        connector.setAttribute('y2', graphDot._gsTransform.y);
      } else {
        // Reset connector attributes
        connector.setAttribute('x1', graphDot._gsTransform.x);
        connector.setAttribute('x2', graphDot._gsTransform.x);
        connector.setAttribute('y1', graphDot._gsTransform.y);
        connector.setAttribute('y2', graphDot._gsTransform.y);
      }
    }

    // Start the animation
    updateTimeline();
    tl.progress = 0.000001;

    // Clean-up function
    return () => {
      // Remove event listeners or any other clean-up actions
      document.removeEventListener('mousemove', updateTimeline);
      document.removeEventListener('mouseup', graphRelease);

      // Remove ticker event listener (if added)
      // gsap.ticker.removeEventListener('tick', connectLine);
    };
  }, []);

  return (
    <svg
      className="mainSVG SVG"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      ref={mainSVGRef}
    >
      {/* Include your SVG content here */}
      {/* Ensure to use refs for elements that require animation */}
    </svg>
  );
};

export default SvgAnimation;
