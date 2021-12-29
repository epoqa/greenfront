import React, { useState, useEffect } from "react";

//NEXT IMPORTS
import NextLink from "next/link";
import { useRouter } from "next/router";

//LIBRARY IMPORTS
import axios from "axios";


export default function Growers() {
 
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/users/all")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);






 
  return (
    <>
    {users.map(user => (
    <NextLink href={{pathname:`/grower/${user.username}`}}>

    <div style={{margin: "15px",padding: "20px", border: "1px solid black", cursor: "pointer"}}>
      <h4>მომხმარებელი: {user.username}</h4>
      <h4>ემაილი: {user.email}</h4>
      <h4>აიდი: {user._id} </h4>
    </div>
    </NextLink>
    ))}
    </>
  );
}