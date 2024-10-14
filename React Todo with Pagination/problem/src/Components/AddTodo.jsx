function AddTodo(props) {
  return <div data-testid="add-todo">{/* Add input tag and a button */}
    <input type="text" value={props.value} onChange={props.onChange}/>
    <button onClick={props.onClick}>ADD TODO</button>
  </div>
}

export default AddTodo;
