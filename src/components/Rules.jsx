import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showRules } from "../features/rulesSlice";

const Rules = () => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <div
      className="border-2 border-white px-3 py-2 rounded-xl text-white w-1/3 m-auto text-center cursor-pointer hover:bg-white hover:text-[#141539]"
      onClick={() => {
        handleClick();
        dispatch(showRules(true));
      }}
    >
      <p className="text-lg">Rules</p>
    </div>
  );
};
export default Rules;
