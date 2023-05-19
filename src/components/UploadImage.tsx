import React from "react";
import { useState, useRef, DragEvent,useEffect } from "react";

// icon
import { AiFillCloseCircle } from "react-icons/ai";


//redux
import {useAppDispatch } from "../app/hooks";
import { Edit_resume } from "../features/resume/resumeSlice";



export default function UploadImage() {

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File>();
  const [image, setImage] = useState<any>();
  const uploderInput = useRef<HTMLInputElement | null>(null);
  const allowedFileType = ["webp", "png", "jpg"];
const dispatch=useAppDispatch()
  // Image generation, from the uploaded file and encoded to base64
  const renderImage = (files: File) => {
    if (!allowedFileType.includes(files.type.replace("image/", ""))) {
      return;
    } else {
      setImageFile(files);
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  // Remove Image Button
  const removeImage = () => {
    setImage(null);
  };


// dispatch picture
useEffect(()=>{
  dispatch(
    Edit_resume({
      name: 'profile',
      value: image,
    }))},[image])

  // Select image after clicking
  const inputUploader = (e: React.BaseSyntheticEvent) => {
    const files = e.currentTarget.files[0];
    files && renderImage(files);
    e.target.value = null;
  };

  //When the range is hovered
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // When it goes out of range
  const handleDragLeave = (e: any) => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  };

  // Once in range, the range will be able to receive information
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  // After dropping the image, the file is at your disposal and you can write your code logic
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files[0];
    files && renderImage(e.dataTransfer.files[0]);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`w-[50%] p-[10px] overflow-hidden flex-center justify-between border-4 border-dashed h-40 rounded-full border-primary text-primary mb-3 text-2xl font-bold ${
          isDragging && "bg-primary/10"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          name="thumbnail"
          className="hidden"
          accept={`image/${allowedFileType.join(",image/")}`}
          onChange={inputUploader}
          ref={uploderInput}
        />
        <p
          className={`flex-center  w-full text-center cursor-pointer ${
            !image ? "w-full" : "hidden"
          } `}
          onClick={() => uploderInput.current?.click()}
        >
          {isDragging ? "Drop your image here" : image ? "" : "Add new photo"}
        </p>
        {!isDragging && image && (
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full h-full flex-center rounded-lg ">
              <AiFillCloseCircle
                className="absolute -top-3  -left-3 w-7 h-7 flex gap-1 items-center justify-center bg-red-600 text-white text-xs rounded-full p-0.5 select-none cursor-pointer"
                onClick={removeImage}
              />
              <img
                src={image && image}
                className="w-[75%] h-[75%] relative top-4 object-cover"
              />
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}
