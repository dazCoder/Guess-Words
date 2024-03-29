import { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

const Timer = () => {
  const { inputTimer, setInputTimer, isTimer, chances } = useAppContext();
  const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (inputTimer > 0 && isTimer) {
      timerRef.current = setInterval(() => {
        setInputTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputTimer, isTimer]);

  const minutes = Math.floor(inputTimer / 60);
  const seconds = inputTimer % 60;

  return (
    <div className="center timerComponent">
      <p className="timerText">Chances left: {chances}</p>
      <p className="timerText">
        Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};

export default Timer;
