import React, { useEffect } from "react";

//LIBRARY IMPORTS
import axios from "axios";

//OTHER IMPORTS
import { NotificationManager } from "../../src/components/Notifications/Notifications";

//NEXT IMPORTS
import NextLink from "next/link";
import { useRouter } from "next/router";

const useValidateToken = () => {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const refreshToken = window.localStorage.getItem("refreshToken");
    !token && router.push("/signin");
    token &&
      axios
        .get("http://localhost:3333/authToken", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          axios
            .post("http://localhost:3333/renewAccessToken", {
              refreshToken,
            })
            .then((response) => {
              window.localStorage.setItem("token", response.data.token);
            })
            .catch((error) => {
              router.push("/signin");
              NotificationManager.error(error.response.data.error, "", 1500);
            });
        });
  });
};
export default useValidateToken;
