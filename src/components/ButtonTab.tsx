import { ReactNode, useState } from "react";

type ButtonProps = {
  active?: boolean;
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ active = false, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        active ? "bg-orange" : ""
      } sm:px-6 px-4 py-4 sm:py-2 rounded-[26px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ButtonTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="text-xs sm:text-base flex items-center justify-between sm:space-x-4 space-x-2 p-2 rounded-[30px] bg-dark-blue-800 text-dark-blue-500">
      <Button active={activeTab == 0} onClick={() => setActiveTab(0)}>
        pomodoro
      </Button>
      <Button active={activeTab == 1} onClick={() => setActiveTab(1)}>
        short break
      </Button>
      <Button active={activeTab == 2} onClick={() => setActiveTab(2)}>
        long break
      </Button>
    </div>
  );
};

export default ButtonTab;
