import { Loader } from "../../../assets/svgs";

const CustomButton = ({ children, bg, isLoading, disabled, width, href, color, handleClick, borderColor, style, border, fontSize }) => (
  <a href={href} className="flex justify-center">
    <button
      type="button"
      className={`${bg} lg:p-5 sm:p-2 rounded-lg hover:opacity-80 flex items-center trans disabled:opacity-50  disabled:cursor-not-allowed ${width} md:text-${fontSize} justify-center border-${border} text-${color} ${borderColor}`}
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
