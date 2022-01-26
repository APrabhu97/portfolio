import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./loader.css";

const Loader = () => {
  const animate = () => {
    const animation = anime.timeline({
      duration: 1500,
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
    });
    animation.add({
      targets: ".one",
      translateY: -100,
      backgroundColor: 'rgb(255, 0, 0)',
    }).add({
      targets: ".two",
      translateY: -100,
      backgroundColor: 'rgb(0, 255, 0)',
    }).add({
      targets: ".three",
      translateY: -100,
      backgroundColor: 'rgb(0, 0, 255)',
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div>
      <div className="ball one"></div>
      <div className="ball two"></div>
      <div className="ball three"></div>
    </div>
  );
};

export default Loader;
