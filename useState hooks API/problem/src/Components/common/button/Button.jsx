import styles from "./Button.module.css"
function Button(props) {
  return <button data-testid="common-button" onClick={props.onClick} className={styles.button} disabled={props.disable}>{props.name}</button>;
}

export default Button;
