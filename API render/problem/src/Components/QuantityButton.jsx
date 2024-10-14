import styles from "./button.module.css"


const QuantityButton = (props) => {

  return <div className="quantity_container" style={
    {
      width:"100%",
      display:"flex",
      gap : "5px",
      paddingLeft: "30%"
    }
  }>
      <button className={styles.btn} onClick={props.incClick} data-cy="inc_btn">+</button>
      <p className="quantity">{props.count}</p>
      <button className={styles.btn} onClick={props.decClick} data-cy="dec_btn">-</button>
  </div>;
};

export default QuantityButton;
