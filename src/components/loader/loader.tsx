import React, { useEffect, useState } from "react";
import anime from 'animejs';
import "./loader.css";

const Loader = () => {
  
  const animate = () => {
    anime({
      targets: '.rope',
      rotate: [60, -60],
      duration: 3000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });
  };

  useEffect(() => {
    animate();
  }, []);


  return (
    <div className="loader">
      <div className="rope">
        <div className="pivot"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default Loader;
