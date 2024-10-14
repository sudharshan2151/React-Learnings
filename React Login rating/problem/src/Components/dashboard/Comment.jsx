import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useState } from "react";
const Comment = (props) => {
  const [rart,setRat] = useState(true);
  const [rating, setRating] = useState(props.rating);
 
  const inc = (i)=>{
    if((i+1)>rating){
      setRating(rating+1);
    }
    else{
      
    }
    
  }
  return (
    <>
    {rart?
      <div  className="ratingcard">
        {/* Add title in h1 tag and StarRating component */}
        <h1 style={{
          color: rating===5?"green": rating==4?"lightgreen": rating==3?"orange": rating==2?"yellow":"red"
          }}>{rating===5?"Excellent": rating==4?"Very Good": rating==3?"good": rating==2?"Poor":"Very Poor"}</h1>
          {console.log("Inside CommentList")}
        <StarRating rating={rating} inc={inc} />
        <FaTrash data-icon="trash" onClick={
          ()=>{
            setRat(false)
          }
        } />
      </div>:
      <></>}
    </>
  );
};
export default Comment;
