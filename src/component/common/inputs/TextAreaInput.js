const TextAreaInput = ({ placeholder, label, handleOnChange, value }) => (
    <div className="my-[40px]">
        <p className="text-[20px] text-white">{label}</p>
        <textarea type="text" placeholder={placeholder} className="block w-[70%] bg-transparent focus:outline-1 trans border rounded-[10px] p-[14px] px-[16px] placeholder:text-[14px] focus:outline-borderColor border-[#9DA1A8] outline-borderColor" onChange={handleOnChange} value={value} />
    </div>
);

export default TextAreaInput;