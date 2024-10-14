import styles from "./TodoItem.module.css"
import {useState} from "react"
import Button from "../common/button/Button";

function TodoItem(props) {
  const [useToggle,setUseToggle] = useState(false);
  return (
    <div data-testid="todo-item" className={styles.wrapper}>
      {/* Add the p tag, and required elements */}
      {console.log(props)}
      <p>{props.title} - {useToggle?"Completed":"Not Completed"}</p>

      <div>{/* add the required buttons here using Button component */}
          <Button name="TOGGLE" onClick={()=>setUseToggle(!useToggle)} disable={false}/>
          <Button name="DELETE" onClick={props.onClick} disable={false}/>
      </div>
    </div>
  );
}

export default TodoItem;
