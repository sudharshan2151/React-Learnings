import React from "react";

const StepOne = (props) => {
  return <div>
    <div>
    <input type="email" data-cy="email"name="email" onChange={props.handleChange} /><label htmlFor="">Email</label>
    </div>
    <input type="password" data-cy="password"name="password" onChange={props.handleChange}/><label htmlFor="">Password</label>
    <div>
    <input type="password" data-cy="confirmedPassword"name="confirmPassword"  onChange={props.handleChange}/><label htmlFor="">Confirm Password</label>
    </div>
  </div>;
};

export default StepOne;
