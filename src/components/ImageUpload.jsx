/* eslint-disable react/require-default-props */
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';



function ImageUpload({ name, maxFiles = 4, maxSize = 5, onChange, images }) {
  const [previews, setPreviews] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchImage = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return new File([blob], url, { type: blob.type });
    };
    const fetchImages = async (urls) => {
      const promises = urls.map((url) => fetchImage(url));
      const img = await Promise.all(promises);
      return img;
    };

    fetchImages(images || []).then((results) => setFileList(results));
  }, [images]);

  useEffect(() => {
    if (onChange) onChange(fileList);
    const newPreviews = fileList.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  }, [fileList, onChange]);

  const handleImageChange = (e) => {
    // TODO: check if maxFiles is reached
    if (e.target.files && e.target.files.length > 0) {
      setFileList((prev) => {
        // TODO: check if file size is too big
        const newFiles = Array.from(e.target.files || []).filter((file) => file.type.includes('image'));
        return [...newFiles, ...prev];
      });
    }
  };

  const handleDragEnter = () => {
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = () => {
    setIsDragging(false);
  };
  return (
    <>
      <label htmlFor={name} className="">
        {name}
      </label>
      <div className="grid w-full auto-rows-fr grid-cols-2 gap-4">
        <div
          className={`hover:bg-sky200/20 relative flex h-full w-full flex-col items-center justify-center rounded border-2 border-dashed p-4 hover:border-gray-600 ${
            isDragging ? 'border-gray-600 bg-sky-200/20' : 'border-sky-400 bg-white'
          } `}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="aspect-square w-20 bg-[url('/public/image-upload.png')] bg-cover" />

          <p className="cursor-pointer text-center font-grotesk text-xs">
            click to upload or <br /> drag and drop
          </p>
          <input
            type="file"
            id={name}
            name={name}
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 cursor-pointer text-xs opacity-0"
            multiple
          />
        </div>
        <div className="grid h-40 grid-cols-2 grid-rows-2 gap-2 sm:h-44">
          {previews.slice(0, 4).map((preview, index) => (
            <div key={preview} className="relative h-full w-full overflow-hidden rounded shadow">
              <img src={preview} alt="" className="h-full w-full overflow-hidden object-cover" />
              <button
                type="button"
                className="absolute top-[2px] left-[2px] rounded-full bg-sky-500/20 p-[3px] text-blue-700 active:shadow-[0_0_0_2px] active:shadow-blue-600"
                onClick={() => {
                  setFileList((prev) => prev.filter((_, i) => i !== index));
                }}
              >
                <FaTimes className="tex-xs" />
              </button>
              {index === 3 && fileList.length > 4 && (
                <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black/50 text-xl text-white">
                  +{fileList.length - 4}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
