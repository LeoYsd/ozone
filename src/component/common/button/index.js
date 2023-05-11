import { Loader } from "../../../assets/svgs";

const CustomButton = ({ children, bg, isLoading, disabled, width, href, color, handleClick, borderColor, style }) => (
  <a href={href} className="flex justify-center">
    <button
      type="button"
      className={`${bg} lg:p-3.5 sm:p-2 rounded-lg hover:opacity-80 flex items-center trans disabled:opacity-50 sm:text-[.8rem] disabled:cursor-not-allowed ${width} justify-center text-${color} border ${borderColor}`}
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
