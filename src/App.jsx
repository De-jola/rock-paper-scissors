import Home from "./components/Home";
import Header from "./components/Header";
import Rules from "./components/Rules";
import { useSelector } from "react-redux";
import RulesPage from "./components/RulesPage";
import GameView from "./components/GameView";

function App() {
  const display = useSelector((state) => state.rules.value.display);
  const selectedId = useSelector(
    (state) => state.renderElement.value.selectedId
  );
  return (
    <>
      {display && <RulesPage />}
      {!display && (
        <div className="bg-linear-to-b from-[#1f3756] to-[#141539]  h-screen p-10 flex flex-col gap-8">
          <Header />
          {selectedId && <GameView />}
          {!selectedId && (
            <>
              <Home />
              <Rules />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
