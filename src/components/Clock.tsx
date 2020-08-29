import React, { useEffect, useState } from "react";

export default function Clock(_props: any) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <div className="flex items-center justify-center">
      <p className="text-center text-6xl text-white font-semibold tracking-wide leading-relaxed uppercase">
        <span className={"font-bold "}>{time.getHours()}</span>
        <span className={"animate-pulse"}> : </span>
        <span className={" text-opacity-75"}>{time.getMinutes()}</span>
      </p>
    </div>
  );
}
