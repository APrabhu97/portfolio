import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./loader.css";

const Loader = () => {
  const animate = () => {
    anime({
      targets: ".letter",
      opacity: 1,
      translateY: 50,
      delay: anime.stagger(100, { start: 1000 }),
      scale: anime.stagger([0.7, 1], { from: 'center' }),
      rotate:{
        value: 360,
        duration: 2000,
        easing: 'easeInExpo'
      },
      translateX: [-10, 30],
    })
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <h1>
      <span className="letter">H</span>
      <span className="letter">E</span>
      <span className="letter">L</span>
      <span className="letter">L</span>
      <span className="letter">O</span>
      &nbsp;
      <span className="letter">W</span>
      <span className="letter">O</span>
      <span className="letter">R</span>
      <span className="letter">L</span>
      <span className="letter">D</span>
      <span className="letter">!</span>
    </h1>
  );
};

export default Loader;
