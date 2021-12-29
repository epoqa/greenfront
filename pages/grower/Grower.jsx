import React, { useState, useEffect } from "react";

//NEXT IMPORTS
import NextLink from "next/link";

//LIBRARY IMPORTS
import axios from "axios";
import { useRouter } from 'next/router'

// ROUTE http://localhost:3001/grower?user=lasha2



export default function Grower() {
  
    let [user, setUser] = useState([]);


  useEffect(async () => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const username = urlSearchParams.get('user')
    console.log(username)
    axios
      .get(`http://localhost:3333/users/${username}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        


      })
      .catch((err) => { 
        console.log(err);
      });
  }, []); 






 
  return (
    <>
    <div style={{margin: "15px",padding: "20px", border: "1px solid black"}}>
      <h4>Username: {user.username}</h4>
      <h4>Email: {user.email}</h4>
      <h4>Id: {user._id} </h4>
    </div>
    </>
  );
}




