import React from "react";

const CoffeeCard = (props) => {
  return <div>
    <img src={props.image} alt="" />
    <h2 className='title'>{props.title}</h2>
    <p className='price'>{props.price}</p>
    <p className='description'>{props.description}</p>
    <p>Ingredient
      <ul className = 'ingredient'>{props.ingredient.map((a)=>{
        return <li>{a}</li>
      })}
      </ul>
    </p>
  </div>;
};

export default CoffeeCard;
