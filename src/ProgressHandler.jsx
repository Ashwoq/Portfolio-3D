// ProgressHandler.jsx
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

const ProgressHandler = ({ onProgressUpdate }) => {
  const { progress } = useProgress();

  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const diff = progress - prev;
        if (diff < 1) return progress;
        return prev + diff * 0.1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    onProgressUpdate(displayProgress);
  }, [displayProgress]);

  return null;
};

export default ProgressHandler;
