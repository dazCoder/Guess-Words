import { useState } from "react";
import { useAppContext } from "../context/AppContext";

type propType = {
  text: string;
};

const KeyboardButton = ({ text }: propType) => {
  const {
    setKeyboardText,
    text: name,
    hasGameStarted,
    lost,
    setChances,
  } = useAppContext();
  const [isCorrectBgColor, setIsCorrectBgColor] = useState(false);
  const [isWrongBgColor, setIsWrongBgColor] = useState(false);

  return (
    <button
      disabled={!hasGameStarted || lost}
      className="button center"
      style={{
        backgroundColor: isCorrectBgColor
          ? "green"
          : isWrongBgColor
          ? "red"
          : "white",
      }}
      onClick={() => {
        if (name) {
          const textIncluded = name.includes(text);
          setIsCorrectBgColor(textIncluded);
          setIsWrongBgColor(!textIncluded);
          setKeyboardText((prev) => prev + text);
          if (!textIncluded) {
            setChances((prev) => prev - 1);
          }
        }
      }}
    >
      <h2>{text}</h2>
    </button>
  );
};

export default KeyboardButton;
