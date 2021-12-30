import React, { useState, useEffect } from "react";

//NEXT IMPORTS
import NextLink from "next/link";

//LIBRARY IMPORTS
import axios from "axios";
import { useRouter } from 'next/router'

// ROUTE http://localhost:3001/grower?user=lasha2



export default function Grower() {
  
    let [user, setUser] = useState([]);
    const router = useRouter();


  useEffect(async () => {
    router.query.user &&
    axios
      .get(`http://localhost:3333/users/${router.query.user}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        


      })
      .catch((err) => { 
        console.log(err);
      });
  }, [router]); 






 
  return (
    <>
    <div style={{margin: "15px",padding: "20px", border: "1px solid black"}}>
      <h4>მომხმარებელი: {user.username}</h4>
      <h4>ემაილი: {user.email}</h4>
      <h4>აიდი: {user._id} </h4>
      <h4>შეიქმნა: {user.createdAt}</h4>
    </div>
    </>
  );
}




