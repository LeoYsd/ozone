import { Loader } from "../../../assets/svgs";

const CustomButton = ({ children, bg, isLoading, disabled, width, href, color, handleClick, borderColor, style }) => (
  <a href={href} className="flex justify-center">
    <button
      type="button"
      className={`${bg} px-4 py-3 rounded-lg hover:opacity-80 flex items-center trans disabled:opacity-50 disabled:cursor-not-allowed ${width} justify-center text-${color} border ${borderColor}`}
      disabled={disabled}
      onClick={handleClick}
      style={style}
    >
      {isLoading && Loader}
      {children}
    </button>
  </a>
);

export default CustomButton;
