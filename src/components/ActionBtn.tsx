import { useAppContext } from "../context/AppContext";

const ActionBtn = () => {
  const { setIsShowResult, isShowResult } = useAppContext();
  return (
    <div className="center actionBtn">
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </button>
      <button onClick={() => setIsShowResult((prev) => !prev)}>
        {isShowResult ? "Hide" : "Show"} Result
      </button>
    </div>
  );
};

export default ActionBtn;
