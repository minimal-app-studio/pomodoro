import DownArrowIcon from "../assets/icons/DownArrow";
import UpArrowIcon from "../assets/icons/UpArrow";

type InputProps = {
  type?: string;
  placeholder?: string;
};

const Input = ({ type = "text", placeholder }: InputProps) => {
  return (
    <div className="relative w-full input">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full py-2 px-4 border rounded-md ${
          type === "number" ? "pr-10" : ""
        }`}
      />
      {type === "number" && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <div className="grid gap-2 place-items-center">
            <UpArrowIcon />
            <DownArrowIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
