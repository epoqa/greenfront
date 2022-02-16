import React, { useEffect } from "react";

//LIBRARY IMPORTS
import axios from "axios";

//OTHER IMPORTS
import { NotificationManager } from "../components/Notifications/Notifications";

//NEXT IMPORTS
import { useRouter } from "next/router";
import { backBaseURL } from "src/consts/consts";

const useValidateToken = (setLoadingState) => {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const refreshToken = window.localStorage.getItem("refreshToken");
    !token && router.push("/login");
    token &&
      axios
        .get(`${backBaseURL}/authToken`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setLoadingState(false);
        })
        .catch((error) => {
          axios
            .post(`${backBaseURL}/renewAccessToken`, {
              refreshToken,
            })
            .then((response) => {
              setLoadingState(false);
              window.localStorage.setItem("token", response.data.token);
            })
            .catch((error) => {
              router.push("/login");
              NotificationManager.error(error.response.data.error);
            });
        });
    return () => console.log("unmounting...");
  }, []);
};
export default useValidateToken;
