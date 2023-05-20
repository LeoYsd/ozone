import React, { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import checkerImage from '../../../assets/images/checker.png';

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${checkerImage})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='flex flex-col gap-3 mt-6'>
        <h1 className='text-white font-bold'>Image, Video, Audio, or 3D Model of the Property</h1>
        <p className='uppercase text-[#777070] text-[.8rem] mb-3'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, 0GG, GLB, GLTF. Max size 100MB</p>
        <div
            className="w-[300px] h-[225px] relative grid place-items-center"
            style={backgroundImageStyle}
            >
            <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileSelect}
            />
            <label
                htmlFor="fileInput"
                className="cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {selectedFile ? (
                <div>
                    <span className="text-lg font-medium">{selectedFile.name}</span>
                    <span> ({selectedFile.size} bytes)</span>
                </div>
                ) : (
                <div className="flex items-center justify-center">
                    <VscAdd size={28} color='#F5F5F5' />
                </div>
                )}
            </label>
            </div>
    </div>
  );
};

export default FileInput;
