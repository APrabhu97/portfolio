import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./loader.css";

const Loader = () => {
  const [showBorder, setShowBorder] = useState(true);
  const animate = () => {
    anime({
      targets: ".box-inner",
      begin: () => setShowBorder(false),
      complete: () => setShowBorder(true),
      easing: "linear",
      translateY: [
        { value: 100, duration: 500 },
        { value: 0, duration: 500, delay: 1500 },
        { value: -103, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 2500 },
        { value: 100, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 1500 },
      ],
      translateX: [
        { value: 103, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 2500 },
        { value: -103, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 2500 },
      ],
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="loader">
      <div
        className={showBorder ? "box-outer" : "box-outer no-bottom-border"}
      ></div>
      <div className="box-inner"></div>
    </div>
  );
};

export default Loader;
