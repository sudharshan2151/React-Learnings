import React from "react";

const StepFour = (props) => {
  return <div>
    <div>Father Name
      <input type="text"data-cy="fatherName" name = "fatherName" onChange={props.handleChange}/>
    </div>
    <div>Mother Name
      <input type="text" data-cy="motherName" name = "motherName"onChange={props.handleChange}/>
    </div>
    <div>Address
       <textarea type="text" name="address" data-cy="address" onChange={props.handleChange}></textarea>
    </div>
  </div>;
};

export default StepFour;
