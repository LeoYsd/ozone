const TextInput = ({ placeholder, label, handleOnChange, value }) => (
    <div className="mb-6">
        <p className="text-[1rem] text-white mb-1">{label}</p>
        <input type="text" placeholder={placeholder} className="block w-full bg-dark focus:outline-1 trans border rounded-[5px] p-[12px] px-[14px] text-[.8rem] placeholder:text-[14px] focus:outline-borderColor border-[#9DA1A8] outline-borderColor" onChange={handleOnChange} value={value} />
    </div>
);

export default TextInput;