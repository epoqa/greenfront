/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import uploadToFirebase from "src/reuseableFunctions/uploadPhoto";
import Loading from "src/components/Loading/Loading";
import { profilePhotoReq } from "src/reuseableFunctions/request";
import styles from "./UserPhoto.module.scss";
import { useSelector, useDispatch } from "react-redux";
const UserPhoto = ({ user, setUser }) => {
  const loggedInUser = useSelector((state) => state.isLogged);
  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const handleFileUpload = (e) => {
    setIsLoading(true);
    uploadToFirebase(e).then((URL) => {
      setUser({ ...user, picture: URL });
      setIsLoading(false);
      profilePhotoReq(URL);
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
        <div className={styles.profilePhotoDiv}>
          {user.username === loggedInUser && (
            <p className={styles.uploadLabel}>ატვირთე</p>
          )}
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
            onClick={() =>
              user.username === loggedInUser && inputRef.current.click()
            }
          />
        </div>
      )}
      {isLoading && <Loading />}
    </div>
  );
};
export default UserPhoto;
