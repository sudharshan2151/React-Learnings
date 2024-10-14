import React from "react";
import Comment from "./Comment";
const CommentList = (props) => {
  return (
    <>
    <Comment {...props}/>
    </>
  );
};
export default CommentList;
