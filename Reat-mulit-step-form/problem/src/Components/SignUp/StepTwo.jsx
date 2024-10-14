import React from "react";

const StepTwo = (props) => {
  return <div>
    <select data-cy="education" name = "eduation" id="" onChange={props.handleChange}>
      <option value="B.Tech">B.Tech</option>
      <option value="Bsc">Bsc</option>
      <option value="B.A">B.A</option>
      <option value="BCA">BCA</option>
    </select>
    <div>
      <input type="month" data-cy="passingYear" name="passingYear" onChange={props.handleChange}/><label htmlFor="">Passing Year</label>
    </div>
    <div>
      <input type="date"data-cy="birthDate" name="birthDate" id="" onChange={props.handleChange}/><label htmlFor="">Birth Date</label>
    </div>
  </div>;
};

export default StepTwo;
