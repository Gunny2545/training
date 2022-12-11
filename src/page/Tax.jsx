import React from "react";
import { useParams } from "react-router-dom";

const Tax = () => {
  const { sal, p } = useParams();
  let tax = (sal * p) / 100;
  return (
    <div>
      Salary: {sal}
      <br/>
      Tax: {tax}
    </div>
  );
};

export default Tax;
