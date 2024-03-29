import "./App.css";
import ActionBtn from "./components/ActionBtn";
import Keyboard from "./components/Keyboard";
import LetterWrapper from "./components/LetterWrapper";
import TextInput from "./components/TextInput";
import Timer from "./components/Timer";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { won, lost, isTimer } = useAppContext();

  return (
    <div className="pageContainer">
      {isTimer && !lost && <Timer />}
      <ActionBtn />
      <div className="mainCentent">
        <LetterWrapper />
        {won && !lost && (
          <div>
            <h1>Hurray You Won!!</h1>
          </div>
        )}
        {lost && !won && (
          <div>
            <h1>Oops You Lost!!</h1>
          </div>
        )}
        <Keyboard />
      </div>
      <TextInput />
    </div>
  );
};

export default App;
