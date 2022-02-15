import React from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";
import axios from "axios";
import { addImage } from "../../redux/actions/action";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { backBaseURL } from "src/consts/consts";
const PhotoUploadInput = ({ chosenWeek, diary }) => {
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
                weekNum: 0,
                id: diary.weeks[chosenWeek]._id,
                picId: uniqid(),
              })
            );
            axios
              .put(
                `${backBaseURL}/diary/picture/${router.query.id}`,
                {
                  picture: url,
                  owner: diary.owner,
                  weekNum: chosenWeek,
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
