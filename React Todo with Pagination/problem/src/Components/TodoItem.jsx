function TodoItem(props) {
  return (
    <div key= {props.id} data-testid="todo-item">
      <p>{props.title}</p>
      <p>{props.status?"Completed":"Not Completed"}</p>
      <button onClick={props.toggle}>TOGGLE</button>
      <button onClick={props.delete}>DELETE</button>
      {/* Add title,status of todo in p tags and TOGGLE, DELETE in buttons */}
    </div>
  );
}

export default TodoItem;
