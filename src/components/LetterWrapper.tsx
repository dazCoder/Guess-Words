import { useAppContext } from "../context/AppContext";
import Letter from "./Letter";

const LetterWrapper = () => {
  const { text } = useAppContext();
  let count = 0;

  return (
    <div className="letterContainer center">
      {text.split("").map((letter, index) => {
        if (letter !== " ") {
          count++;
        } else {
          count = 0;
        }
        return <Letter key={index} letter={letter} count={count} />;
      })}
    </div>
  );
};

export default LetterWrapper;
