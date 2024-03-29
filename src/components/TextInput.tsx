import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { showPasswordIcon, hidePasswordIcon } from "../assests/Icons";

const TextInput = () => {
  const {
    inputText,
    setInputText,
    setText,
    setIsShowResult,
    setInputTimer,
    setIsTimer,
    setHasGameStarted,
    inputTimer,
    setChances,
  } = useAppContext();
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div className="center">
      <div className="inputFieldWrapper center">
        <input
          className="inputField"
          type={passwordShow ? "text" : "password"}
          placeholder="Object name here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value.toLocaleUpperCase())}
        />

        <button
          className="showBtn"
          onClick={() => setPasswordShow((prev) => !prev)}
        >
          {passwordShow ? showPasswordIcon : hidePasswordIcon}
        </button>
      </div>
      <input
        className="timerField"
        type={"number"}
        placeholder="Enter minute"
        onChange={(e) => setInputTimer(+e.target.value * 60)}
      />

      <input
        className="chancesField"
        type={"number"}
        placeholder="Chances"
        onChange={(e) => setChances(+e.target.value)}
      />

      <button
        className="startGame"
        onClick={() => {
          if (inputText.length && inputTimer) {
            setText(inputText);
            setInputText("");
            setIsShowResult(false);
            setIsTimer(true);
            setHasGameStarted(true);
          }
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default TextInput;
