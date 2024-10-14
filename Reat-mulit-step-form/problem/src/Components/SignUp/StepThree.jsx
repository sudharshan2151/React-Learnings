import React from "react";

const StepThree = (props) => {
  return <div>
    <div>First Name
      <input type="text" data-cy="firstName"name="firstName" onChange={props.handleChange} />
    </div>
    <div>Last Name
      <input type="text" data-cy="lastName" name="lastName" onChange={props.handleChange}/>
    </div>
    <div>Phone Number
      <input type="tel" data-cy="phone" name="phoneNumber" onChange={props.handleChange} />
    </div>
  </div>;
};

export default StepThree;
