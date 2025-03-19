import React from "react";
import GameIcons from "./GameIcons";

const Home = () => {
  return (
    <div className="">
      <div
        className="grid grid-cols-2 bg-contain bg-center bg-no-repeat "
        style={{
          backgroundImage: `url("/images/bg-triangle.svg")`,
          backgroundPosition: "center 29px",
        }}
      >
        <GameIcons
          color="blue"
          icon="/images/icon-paper.svg"
          id="1"
          className="place-self-center"
        />
        <GameIcons
          color="yellow"
          icon="/images/icon-scissors.svg"
          id="2"
          className="place-self-center"
        />
        <div className="col-span-2 ">
          <GameIcons
            color="red"
            icon="/images/icon-rock.svg"
            id="3"
            className="place-self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
