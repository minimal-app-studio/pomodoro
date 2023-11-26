import CloseIcon from "../assets/icons/Close";
import Input from "../components/Input";

type SettingsModalProps = {
  onClose: () => void;
};

const SettingsModal = ({ onClose }: SettingsModalProps) => {
  return (
    <div className="absolute rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[90vw] bg-white z-40">
      <header id="header" className="flex justify-between p-6 border-b-[1px]">
        <p className="text-lg font-bold">Settings</p>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </header>
      <section className="px-6">
        <section className="flex flex-col justify-between border-b-[1px] py-4">
          <p className="text-xs font-bold uppercase tracking-[4.231px] text-center">
            time (minutes)
          </p>
          <section className="flex flex-col gap-4 mt-4">
            <div
              id="pomodoro-setting"
              className="grid items-center grid-cols-2 "
            >
              <p className="text-sm font-bold text-light-grey opacity-40">
                pomodoro
              </p>
              <Input type="number" placeholder="25" />
            </div>
            <div
              id="pomodoro-setting"
              className="grid items-center grid-cols-2 "
            >
              <p className="text-sm font-bold text-light-grey opacity-40">
                short break
              </p>
              <Input type="number" placeholder="25" />
            </div>
            <div
              id="pomodoro-setting"
              className="grid items-center grid-cols-2 "
            >
              <p className="text-sm font-bold text-light-grey opacity-40">
                long break
              </p>
              <Input type="number" placeholder="25" />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default SettingsModal;
