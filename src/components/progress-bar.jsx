import { useEffect, useState } from "react";

export default function ProgressBar({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);
  useEffect(() => {
      setInterval(
          setRemainingTime((prevValue) => {
              prevValue - 100;
              console.log(prevValue)
            }),
            100
            );
  }, []);
  return <progress value={remainingTime} max={timeout}/>
}
