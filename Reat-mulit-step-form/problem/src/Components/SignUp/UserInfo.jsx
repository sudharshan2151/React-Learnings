import React from "react";

const UserInfo = (props) => {
  console.log(props);
  const ar = [];
  for(let a in props){
      let temp = <p>{a}:{props[a]}</p>;
      ar.push(temp);
  }
  return <div className="user_info">
    <h2>You are registered successfully!</h2>
    {ar.map(a=>a)}
  </div>;
};

export default UserInfo;
