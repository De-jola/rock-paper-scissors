import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import GameIcons from "./gameIcons";
import Status from "./Status";
import { checkGame } from "../features/renderElementSlice";
import PlayAgain from "./PlayAgain";
import Rules from "./Rules";

const GameView = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state) => state.renderElement.value.selectedId
  );
  const randomId = useSelector((state) => state.renderElement.value.randomId);
  const gameResult = useSelector(
    (state) => state.renderElement.value.gameResult
  );

  const gameIconProps = {
    1: { color: "blue", icon: "/images/icon-paper.svg" },
    2: { color: "yellow", icon: "/images/icon-scissors.svg" },
    3: { color: "red", icon: "/images/icon-rock.svg" },
  };

  useEffect(() => {
    if (selectedId && randomId) {
      dispatch(checkGame());
    }
  }, [selectedId, randomId, dispatch]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          {selectedId && (
            <GameIcons
              id={selectedId}
              color={gameIconProps[selectedId]?.color}
              icon={gameIconProps[selectedId]?.icon}
              disabled={!!gameResult}
            />
          )}
          <p className="text-white text-center">You picked</p>
        </div>
        <div className="flex flex-col gap-3">
          {randomId && (
            <GameIcons
              id={randomId}
              color={gameIconProps[randomId]?.color}
              icon={gameIconProps[randomId]?.icon}
              disabled={!!gameResult}
            />
          )}
          <p className="text-white text-center">The House Picked</p>
        </div>
      </div>
      <Status />
      <PlayAgain />
      <Rules />
    </div>
  );
};

export default GameView;
