import React from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import axios from "axios";
const PhotoUploadInput = ({ weekNum, diary }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAWyXsWODhlZWlYPc5pE5XxTf_04oeyFpE",
    authDomain: "green-b3fdd.firebaseapp.com",
    projectId: "green-b3fdd",
    storageBucket: "green-b3fdd.appspot.com",
    messagingSenderId: "867134789739",
    appId: "1:867134789739:web:1c591b794dac5c3151f92e",
    measurementId: "G-THHJSEC3ML",
  };
  const app = initializeApp(firebaseConfig);

  const handleFileUpload = (e) => {
    const storage = getStorage();
    const mountainsRef = ref(storage, `images/${e.target.files[0].name}`);
    uploadBytes(mountainsRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(ref(storage, `images/${e.target.files[0].name}`)).then(
        (url) => {
          //   axios.put(
          //     `https://greenbackk.herokuapp.com/diary/picture/${router.query.id}`,
          //     {
          //       picture: url,
          //       owner: diary.owner,
          //       weekNum: chosenWeek,
          //     },
          //     {
          //       headers: {
          //         Authorization: "Bearer " + localStorage.getItem("token"),
          //       },
          //     }
          //   );
          // })
          // .catch((error) => {
          //   console.log(error);
          console.log("hi", url);
        }
      );
    });
  };
  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => handleFileUpload(e)}
      />
    </div>
  );
};

export default PhotoUploadInput;
