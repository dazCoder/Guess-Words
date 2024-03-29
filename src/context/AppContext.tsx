import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AppContextType = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  keyboardText: string;
  setKeyboardText: React.Dispatch<React.SetStateAction<string>>;
  isShowResult: boolean;
  setIsShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  isTimer: boolean;
  setIsTimer: React.Dispatch<React.SetStateAction<boolean>>;
  totalTextCount: number;
  setTotalTextCount: React.Dispatch<React.SetStateAction<number>>;
  inputTimer: number;
  setInputTimer: React.Dispatch<React.SetStateAction<number>>;
  chances: number;
  setChances: React.Dispatch<React.SetStateAction<number>>;
  hasGameStarted: boolean;
  setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  won: boolean;
  lost: boolean;
};

export const AppContext = createContext({} as AppContextType);

type appType = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: appType) => {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");
  const [keyboardText, setKeyboardText] = useState("");
  const [isShowResult, setIsShowResult] = useState(false);
  const [isTimer, setIsTimer] = useState(false);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [totalTextCount, setTotalTextCount] = useState(0);
  const [inputTimer, setInputTimer] = useState(0);
  const [chances, setChances] = useState(0);

  const totalBoxLength = text.split("").filter((item) => item !== " ").length;

  const won = useMemo(() => {
    return (
      totalBoxLength === totalTextCount &&
      totalBoxLength !== 0 &&
      totalTextCount !== 0
    );
  }, [totalBoxLength, totalTextCount]);

  const lost = useMemo(() => {
    return hasGameStarted && ((inputTimer === 0 && !won) || chances === 0);
  }, [chances, hasGameStarted, inputTimer, won]);

  useEffect(() => {
    if (won) {
      setIsTimer(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won]);

  return (
    <AppContext.Provider
      value={{
        inputText,
        setInputText,
        setText,
        text,
        keyboardText,
        setKeyboardText,
        isShowResult,
        setIsShowResult,
        totalTextCount,
        setTotalTextCount,
        inputTimer,
        setInputTimer,
        isTimer,
        setIsTimer,
        hasGameStarted,
        setHasGameStarted,
        chances,
        setChances,
        won,
        lost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
