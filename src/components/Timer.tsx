import React, { useState, useEffect } from "react";

const Timer = ({ duration }: { duration: number }) => {
  const [pendingDuration, setPendingDuration] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setPendingDuration((pendingDuration) => {
        if (pendingDuration > 0) {
          return pendingDuration - 1;
        }
        clearInterval(timer);
        return 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [duration, pendingDuration]);

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = (1 - pendingDuration / duration) * circumference;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="relative rounded-full  flex items-center justify-center w-[20rem] h-[20rem]  bg-clock-gradient z-0">
      <div className="grid rounded-full place-items-center bg-dark-blue-800 w-[18rem] h-[18rem] clock-box-shadow 	z-10"></div>
      <svg
        className="absolute inset-0 z-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width="325"
        height="325"
        viewBox="0 0 325 325"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="162.5"
          cy="162.5"
          r={radius}
          className="stroke-orange fill-transparent"
          strokeWidth="12"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(270 162.5 162.5)"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <div className="absolute inset-0 z-30 rounded-full flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 text-grey top-1/2 left-1/2 w-[18rem] h-[18rem] hover:cursor-pointer">
          <p className="text-6xl font-bold ">{formatTime(pendingDuration)}</p>
          <p className="tracking-[0.5rem] uppercase mt-2">pause</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
