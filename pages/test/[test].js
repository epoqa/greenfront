import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const Test = () => {
  const router = useRouter();
  useEffect(() => {
    router.query.test &&
      axios
        .get(`https://greenbackk.herokuapp.com/diary/id/${router.query.test}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [router]);

  return <h1>HHIIII</h1>;
};

export default Test;
