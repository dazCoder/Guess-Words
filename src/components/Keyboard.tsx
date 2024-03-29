import React, { useMemo } from "react";
import KeyboardButton from "./KeyboardButton";
import { alphabetGenerator } from "../tools/utils";

const Keyboard = () => {
  const ALPHABET = useMemo(() => {
    return alphabetGenerator();
  }, []);

  return (
    <div className="keyboardContainer">
      {ALPHABET.map((letter) => (
        <KeyboardButton key={letter} text={letter} />
      ))}
    </div>
  );
};

export default Keyboard;
