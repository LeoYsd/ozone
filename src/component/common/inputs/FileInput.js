const FileInput = ({ placeholder, label, handleFileChange, value }) => (
    <div className="my-[40px]">
<label className="text-[20px] text-white">{label}</label>
                    <p className="text-[#777070] text-[15px]">{placeholder}</p>
                    <input type="file" accept="image/png, image/gif, image/jpeg" className="h-[250px] border mt-10 text-white border-dashed border-[#F5F5F5] rounded bg-transparent" onChange={handleFileChange} value={value} />
    </div>
);

export default FileInput;