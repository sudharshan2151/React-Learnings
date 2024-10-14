import React from "react";
import { FaStar } from "react-icons/fa";
import {useState} from "react"
const Star = (props) => {
  return <FaStar data-icon="star" onClick={props.onClick}
  style={{ color:props.col?"rgb(255, 255, 0)": "rgb(128, 128, 128)" }}
  />;

};
export default Star;
