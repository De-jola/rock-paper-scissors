import { useDispatch } from "react-redux";
import { hideRules } from "../features/rulesSlice";
const RulesPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen flex flex-col justify-around items-center p-8">
      <h1 className="text-2xl font-bold text-[#606e85]">RULES</h1>
      <div className="">
        <img src="/images/image-rules.svg" className="w-full" />
      </div>
      <div
        onClick={() => {
          dispatch(hideRules(false));
        }}
      >
        <img src="/images/icon-close.svg" />
      </div>
    </div>
  );
};

export default RulesPage;
