import { useEffect, useState } from "react";

export default function CountDown({ onCountEnd }) {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    console.log("timer useEffect");
    const id = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setTimer(30);
        onCountEnd();
      }
    }, 1000);
    return () => clearTimeout(id);
  });
  return <span> auto refresh in {timer} seconds</span>;
}
