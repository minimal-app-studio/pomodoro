import { useState } from "react";
import SettingsIcon from "./assets/icons/Settings";
import ButtonTab from "./components/ButtonTab";
import Timer from "./components/Timer";
import SettingsModal from "./screens/SettingsModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <div className="flex flex-col items-center justify-between h-screen p-8 bg-dark-blue-500 ">
        <div className="flex flex-col items-center justify-between gap-8 ">
          <p className="font-bold text-grey">Pomodoro</p>
          <ButtonTab />
        </div>
        <Timer duration={94} />
        <button>
          <SettingsIcon />
        </button>
      </div>

      {isModalOpen && <SettingsModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default App;
