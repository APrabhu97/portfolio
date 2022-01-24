import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./loader.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const battery = {
    progress: 0,
  };
  const animate = () => {
    const icon = anime({
      targets: ".batterySegment",
      width: 33,
      duration: 300,
      easing: "linear",
      loop: true,
      delay: anime.stagger(500),
      endDelay: 500,
    });

    anime({
      targets: battery,
      progress: 100,
      duration: 3000,
      round: 1,
      easing: "linear",
      update: () => {
        setProgress(battery.progress);
      },
      complete: () => {
        icon.pause();
        icon.seek(icon.duration);
      },
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="loader">
      <div className="cellOuter">
        <div className="batterySegment"></div>
        <div className="batterySegment"></div>
        <div className="batterySegment"></div>
      </div>
      <div className="cellPoint"></div>
      <div className="percentage">{progress}%</div>
    </div>
  );
};

export default Loader;
