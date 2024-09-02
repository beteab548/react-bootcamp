import { useEffect, useState } from "react";

export default function ProgressBar({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  console.log(remainingTime);
  useEffect(() => {
    console.log("timeout is set");
    const timer = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevValue) => {
        if (prevValue == 0) {
          setRemainingTime(timeout);
        }
        return prevValue - 100;
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
