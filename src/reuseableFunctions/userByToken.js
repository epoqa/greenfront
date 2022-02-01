/* eslint-disable react-hooks/rules-of-hooks */
import {
    useSelector,
    useDispatch
} from "react-redux";
import {
    loggedInUser
} from "../redux/actions/action"

import axios from "axios";
import React, {
    useEffect
} from "react";


const userByToken = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const refreshToken = window.localStorage.getItem("refreshToken");
        if (!token && !refreshToken) {
            return dispatch(loggedInUser(false));
        }
        token &&
            axios
            .get("https://greenbackk.herokuapp.com/authToken", {
                headers: {
                    Authorization: token,
                },
            })
            .then((response) => {
                if(response.data.username === undefined){
                    return dispatch(loggedInUser(false));
                }
                dispatch(loggedInUser(response.data.username));
            })
            .catch((error) => {
                axios
                    .post("https://greenbackk.herokuapp.com/renewAccessToken", {
                        refreshToken,
                    })
                    .then((response) => {
                        window.localStorage.setItem("token", response.data.token);
                        axios
                            .get("https://greenbackk.herokuapp.com/authToken", {
                                headers: {
                                    Authorization: token,
                                },
                            })
                            .then((response) => {
                                if(response.data.username === undefined){
                                    return dispatch(loggedInUser(false));
                                }
                                dispatch(loggedInUser(response.data.username));
                            })

                    })
                    .catch((error) => {
                        dispatch(loggedInUser(false));
                        NotificationManager.error(error.response.data.error);
                    });
            });
    })



}

export default userByToken