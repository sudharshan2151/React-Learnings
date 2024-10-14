import AddTodo from "./AddTodo";
import Container from "../common/container/Container";
function TodoList() {
  return (
    <>
    <Container>
        {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
        <h1>Todo List</h1>
        {/* Add AddTodo component here */}
        <ul>
          {/* map all the todo's here with the help of TodoItem component */}
          <AddTodo/>
        </ul>
      </Container>
    </>
  );
}

export default TodoList;
