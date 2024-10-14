import Star from "./Star";
const StarRating = (props) => {
 
  return (
    <>
      {/* Add stars here with the help of Star component */}
      {[...Array(5)].map((a,i)=>{
       return <Star key={i} col={i+1<=props.rating?true:false} onClick={()=>props.inc(i)}/>
      })}
      {/* add p tag here in this format {selectedStars} of {totalStars} like 1 of 5*/}
      <p>{props.rating} of 5</p>
    </>
  );
};
export default StarRating;
