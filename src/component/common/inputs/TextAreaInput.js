const TextAreaInput = ({ placeholder, label, handleOnChange, value }) => (
    <div className="">
        <p className="text-[1rem] mb-1 text-white">{label}</p>
        <textarea type="text" placeholder={placeholder} className="block w-full bg-dark focus:outline-1 trans border rounded-[5px] p-[12px] px-[14px] placeholder:text-[14px] focus:outline-borderColor border-[#9DA1A8] outline-borderColor h-[200px]" onChange={handleOnChange} value={value} />
    </div>
);

export default TextAreaInput;