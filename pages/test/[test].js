import React from "react";
import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  console.log(router.query.test);
  return <h1>HHIIII</h1>;
};

export default Test;
