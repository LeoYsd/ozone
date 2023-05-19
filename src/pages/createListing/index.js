import { useState } from "react";
import CustomButton from "../../component/common/button";
import FileInput from "../../component/common/inputs/FileInput";
import TextAreaInput from "../../component/common/inputs/TextAreaInput";
import TextInput from "../../component/common/inputs/TextInput";
import ProfileNav from "../../component/common/profileHeader/profileNav";
import { AuthLayout } from "../../component/layout";

const CreateListing = () => {
    const [propertyName, setPropertyName] = useState('');
    const [description, setDiscription] = useState('');
    const [address, setAddress] = useState('');
    const [propertyImages, setPropertyImages] = useState(null);
    const [propertyDocument, setPropertyDocument] = useState(null);

    const handlePropertyImages = (event) => {
      const file = event.target.files[0];
      console.log(file);
      setPropertyImages(file);
    };
    const handlePropertyDocument = (event) => {
        const file = event.target.files[0];
        setPropertyDocument(file);
    }

    const handleSubmit = () => {
        const data = { propertyName, propertyImages, address, propertyDocument };
        console.lof(data)
    };
return (
    <AuthLayout>
        <ProfileNav />

        <div className="px-16 mt-[75px] my-4">
            <h1 className="text-[35px] text-white">List Property</h1>
            
            <form className="mt-[40px]" onSubmit={handleSubmit}>
                <div>
                    <FileInput label="Image, Video, Audio, or 3D Model of the Property" placeholder="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, 0GG, GLB, GLTF. Max size 100MB" handleFileChange={handlePropertyImages} />
                </div>

                <div className="mt-[40px]">
                    <TextInput label="Property Name *" placeholder="Property name" handleOnChange={({ target }) => setPropertyName(target.value)} value={propertyName} />
                    <TextInput label="Property Address *" placeholder="Full Address" handleOnChange={({ target }) => setAddress(target.value)} value={address} />
                    <TextAreaInput label="Description *" placeholder="Provide a detailed description of your property." handleOnChange={({ target }) => setDiscription(target.value)} value={description} />
                    <FileInput label="Image, Video, Audio, or 3D Model of the Property" placeholder="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, 0GG, GLB, GLTF. Max size 100MB" handleFileChange={handlePropertyDocument} />
                    <TextAreaInput label="Supply *" placeholder="1" />
                    <TextAreaInput label="Blockchain *" placeholder="Circle" />
                </div>
                <div className="flex w-full">
                    <CustomButton style={{ background: "linear-gradient(94.72deg, rgba(239, 141, 248, 0.8) -31.25%, rgba(156, 148, 254, 0.8) 139.69%, rgba(239, 141, 248, 0) 139.69%)", height: "45px" }} color="white" disabled={!propertyName || !description || !address}>Approved</CustomButton>
                </div>
            </form>
        </div>
    </AuthLayout>
);
};

export default CreateListing;