import { useSelector } from "react-redux";

const Status = () => {
  const gameStatus = useSelector(
    (state) => state.renderElement.value.gameResult
  );
  return (
    <>
      <div>
        <p className="text-white text-4xl font-bold text-center">
          You {gameStatus}
        </p>
      </div>
    </>
  );
};

export default Status;
