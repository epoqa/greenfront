import React, { useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";
import { addImage } from "../../redux/actions/action";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { AiFillPlusCircle } from "react-icons/ai";
import Styles from "./PhotoUploadInput.module.scss";
import { addPhotoReq } from "src/reuseableFunctions/request";
import uploadToFirebase from "src/reuseableFunctions/uploadPhoto";

const PhotoUploadInput = ({ chosenWeek, diary, setIsLoading }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleFileUpload = (e) => {
    setIsLoading(true);
    uploadToFirebase(e).then((URL) => {
      dispatch(
        addImage({
          picture: URL,
          owner: diary.owner,
          chosenWeek: chosenWeek,
          picId: uniqid(),
        })
      );
      setIsLoading(false);
    });
  };
  return (
    <div
      className={Styles.mainPhotoUploadInputDiv}
      onClick={() => inputRef.current.click()}
    >
      <AiFillPlusCircle size={30} title="დაამატე ფოტო" />
      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => handleFileUpload(e)}
      />
    </div>
  );
};

export default PhotoUploadInput;
