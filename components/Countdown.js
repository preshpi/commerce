import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [days, setDays] = useState(30);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date("2023-04-08T00:00:00Z").getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex items-center justify-center">
        <div className="flex justify-center pt-4">
          <div className="grid">
            <p className="text-x font-light mx-4 uppercase">days</p>
            <p className="text-xl mx-4">{days}</p>
          </div>
          
          <div className="grid">
            <p className="text-x font-light mx-4 uppercase">hrs</p>
            <p className="text-xl mx-4">{hours}</p>
          </div>
          <div className="grid">
            <p className="text-x font-light mx-4 uppercase">mins</p>
            <p className="text-xl mx-4">{minutes}</p>
          </div>
          <div className="grid">
            <p className="text-x font-light mx-4 uppercase">sec</p>
            <p className="text-xl mx-4">{seconds}</p>
          </div>
        </div>
    </div>
  );
};

export default Countdown;
