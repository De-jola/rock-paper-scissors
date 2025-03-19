import GameIcons from "./gameIcons";

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
          className="place-self-center"
          id="1"
        />
        <GameIcons
          color="yellow"
          icon="/images/icon-scissors.svg"
          className="place-self-center"
          id="2"
        />
        <div className="col-span-2">
          <GameIcons
            color="red"
            icon="/images/icon-rock.svg"
            className="place-self-center"
            id="3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
