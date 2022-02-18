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

const PhotoUploadInput = ({ chosenWeek, diary, setIsLoading }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const router = useRouter();

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };
  const app = initializeApp(firebaseConfig);

  const handleFileUpload = (e) => {
    setIsLoading(true);
    const storage = getStorage();
    const mountainsRef = ref(storage, `images/${e.target.files[0].name}`);
    uploadBytes(mountainsRef, e.target.files[0]).then((snapshot) => {
      e.target.files[0] &&
        getDownloadURL(ref(storage, `images/${e.target.files[0].name}`))
          .then((url) => {
            dispatch(
              addImage({
                picture: url,
                owner: diary.owner,
                chosenWeek: chosenWeek,
                picId: uniqid(),
              })
            );
            setIsLoading(false);
            addPhotoReq(url, diary.owner, chosenWeek, router.query.id);
          })

          .catch((error) => {
            console.log(error);
          });
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
