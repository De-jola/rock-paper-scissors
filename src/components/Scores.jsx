import React, { useState } from "react";
import { useSelector } from "react-redux";

const Scores = () => {
  const score = useSelector((state) => state.renderElement.value.scores);

  return (
    <div className="bg-white p-3 rounded-lg w-1/3 flex flex-col items-center">
      <p>SCORE</p>
      <p className="text-4xl font-bold text-[#606e85]">{score}</p>
    </div>
  );
};

export default Scores;
