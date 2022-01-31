import React from "react";
// import storage from "../../firebase/firebase";

const PhotoUploadInput = () => {
  return (
    <div>
      <input type="file" accept="image/png, image/jpeg" />
    </div>
  );
};

export default PhotoUploadInput;
