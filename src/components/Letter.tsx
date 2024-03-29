import { useEffect, useMemo } from "react";
import { useAppContext } from "../context/AppContext";

type propType = {
  letter: string;
  count: number;
};

const Letter = ({ letter, count }: propType) => {
  const { keyboardText, isShowResult, setTotalTextCount } = useAppContext();

  const match = useMemo(() => {
    return keyboardText.includes(letter);
  }, [keyboardText, letter]);

  useEffect(() => {
    if (match) {
      setTotalTextCount((prev) => prev + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  return (
    <>
      {letter === " " ? (
        <div className="letterBox blank"></div>
      ) : (
        <div className="center letterBoxContainer">
          <div className="letterBox center">
            <h1>{match || isShowResult ? letter : ""}</h1>
          </div>
          <span>{count}</span>
        </div>
      )}
    </>
  );
};

export default Letter;
