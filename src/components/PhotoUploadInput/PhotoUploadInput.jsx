import React from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";
import axios from "axios";
const PhotoUploadInput = ({ chosenWeek, diary }) => {
  const router = useRouter();

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
    console.log(diary);
    uploadBytes(mountainsRef, e.target.files[0]).then((snapshot) => {
      e.target.files[0] &&
        getDownloadURL(ref(storage, `images/${e.target.files[0].name}`))
          .then((url) => {
            axios
              .put(
                `https://greenbackk.herokuapp.com/diary/picture/${router.query.id}`,
                {
                  picture: url,
                  owner: diary.owner,
                  weekNum: 0,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then((response) => console.log(response));
          })

          .catch((error) => {
            console.log(error);
          });
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
