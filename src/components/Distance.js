import React from "react";
import Distancing from "./Distancing";
import Walk from "../icons/Walk";

export default function Distance({ value }) {
  return (
    <Distancing>
      <Walk />
      &nbsp; {value} Min.
    </Distancing>
  );
}
