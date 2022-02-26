import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const uploadToFirebase = (e) => {
  if (!e.target.files[0]) {
    return;
  }

  const storage = getStorage();
  const mountainsRef = ref(storage, `images/${e.target.files[0].name}`);

  return uploadBytes(mountainsRef, e.target.files[0]).then((snapshot) => {
    return getDownloadURL(ref(storage, `images/${e.target.files[0].name}`));
  });
};

export default uploadToFirebase;
