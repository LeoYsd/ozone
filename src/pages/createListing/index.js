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
        console.log(data)
    };
return (
    <AuthLayout>
        <ProfileNav />
        <div className="w-full grid place-items-center">
            <div className="md:w-[55%] sm:w-[92%]">
                <div className="my-20 md:ml-10">
                    <h1 className="lg:text-[2.5rem] text-[2rem] text-white font-bold">List Property</h1>
                    
                    <form className="" onSubmit={handleSubmit}>
                        <div>
                            <FileInput label="Image, Video, Audio, or 3D Model of the Property" placeholder="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, 0GG, GLB, GLTF. Max size 100MB" handleFileChange={handlePropertyImages} />
                        </div>

                        <div className="mt-[40px]">
                            <TextInput label="Property Name *" placeholder="Property name" handleOnChange={({ target }) => setPropertyName(target.value)} value={propertyName} />
                            <TextInput label="Property Address *" placeholder="Full Address" handleOnChange={({ target }) => setAddress(target.value)} value={address} />
                            <TextAreaInput label="Description *" placeholder="Provide a detailed description of your property." handleOnChange={({ target }) => setDiscription(target.value)} value={description} />
                            <FileInput label="Upload Legal Documents*" placeholder="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, 0GG, GLB, GLTF. Max size 100MB" handleFileChange={handlePropertyDocument} />
                            <div className="mt-4">
                            <TextInput label="Supply *" placeholder="1" />
                            </div>
                            <TextInput label="Blockchain *" placeholder="Circle" />
                        </div>
                        <div className="flex w-full">
                            <CustomButton style={{ background: "linear-gradient(94.72deg, rgba(239, 141, 248, 0.8) -31.25%, rgba(156, 148, 254, 0.8) 139.69%, rgba(239, 141, 248, 0) 139.69%)", height: "45px" }} color="white" disabled={!propertyName || !description || !address}>Approved</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthLayout>
);
};

export default CreateListing;