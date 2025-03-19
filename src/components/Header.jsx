import React from "react";
import Scores from "../components/Scores";

const Header = () => {
  return (
    <div className="flex mb-12 justify-between border-2 border-[#606e85] rounded-lg p-3 items-center">
      <div>
        <img src="/images/logo.svg" className="w-2/3" />
      </div>
      <Scores />
    </div>
  );
};

export default Header;
