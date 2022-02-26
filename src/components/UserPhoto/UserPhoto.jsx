/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import uploadToFirebase from "src/reuseableFunctions/UploadPhoto";
import Loading from "src/components/Loading/Loading";
import { profilePhotoReq } from "src/reuseableFunctions/request";
const UserPhoto = ({ user, setUser }) => {
  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);
  const handleFileUpload = (e) => {
    setIsLoading(true);
    uploadToFirebase(e).then((URL) => {
      setUser({ ...user, picture: URL });
      setIsLoading(false);
      profilePhotoReq(URL);

      ///user/update/picture
    });
  };
  return (
    <div>
      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => handleFileUpload(e)}
      />
      {!isLoading && (
        <img
          src={
            user.picture
              ? user.picture
              : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
          alt="..."
          width="180"
          className="rounded mb-2 img-thumbnail"
          title="Upload"
          onClick={() => inputRef.current.click()}
        />
      )}
      {isLoading && <Loading />}
    </div>
  );
};
export default UserPhoto;
