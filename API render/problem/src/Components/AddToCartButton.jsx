import styles from "./button.module.css"
const AddToCartButton = (props) => {
  return <div data-cy="add-to-cart-btn" className=".button-18" onClick={props.onClick}>
    <button className={styles.btn}>Add to Cart</button>
  </div>
};

export default AddToCartButton;
