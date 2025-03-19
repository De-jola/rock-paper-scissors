import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { render, randomRender } from "../features/renderElementSlice";

const GameIcons = ({ color, icon, className, id, disabled }) => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    if (disabled) return;
    setIsClicked(true);
    dispatch(render(id));
    dispatch(randomRender());

    console.log("I've been clicked with id of ", id);
  };
  return (
    <>
      <div
        className={`border-[14px] shadow-[inset_0px_12px_20px_rgba(0,0,0,0.2)] border-${color}-500  flex items-center p-5 w-28 h-28 rounded-full bg-white ${className}  ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={handleClick}
      >
        <img src={icon} className="w-12 h-12 m-auto" />
      </div>
    </>
  );
};
export default GameIcons;
