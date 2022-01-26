import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./loader.css";

const Loader = () => {
  const animate = () => {
    
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
