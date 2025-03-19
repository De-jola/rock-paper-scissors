import { useDispatch } from "react-redux";
import { resetGame } from "../features/renderElementSlice";

const PlayAgain = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="bg-white p-2 rounded-lg w-1/2 m-auto"
      onClick={() => {
        dispatch(resetGame());
      }}
    >
      Play Again
    </button>
  );
};
export default PlayAgain;
