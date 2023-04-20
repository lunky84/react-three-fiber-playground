import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onStarted();
    }
  }, [progress]);

  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
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
