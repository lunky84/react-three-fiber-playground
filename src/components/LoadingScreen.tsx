import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ReactSVG } from "react-svg";

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      var tl = gsap.timeline({ onComplete: () => onStarted() });
      tl.to(".loadingScreen__logo", {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.inOut",
        delay: 0.8,
      }).to(".loadingScreen__logo", {
        scale: 0,
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to("#mask", {
        height: 100 - progress,
        onComplete: () => {
          tl.play();
        },
      });
    }
  }, [progress]);

  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__logo">
        <ReactSVG src="./Threejs-logo.svg" />
      </div>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};
