import { useEffect } from "react";
import { useState } from "react"
import ToDoItem from "./components/todo-item";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  async function fetchToDoList() {
    try {
      setLoading(true);
      const apiResult = await fetch('https://dummyjson.com/todos');
      const result = await apiResult.json();
      console.log(result);
      
      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result.todos);
        setLoading(false);
        setErrorMessage('');
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMessage("ToDo List is Empty!");
      }
    } catch (error) {
      setErrorMessage('An error occurred while fetching todo list');
    }
  }

  useEffect(() => {
    fetchToDoList();
  }, []);

  return (
    <div>
      <h1>ToDo List App</h1>
      <div>
        {
          todoList && todoList.length > 0 ?
            todoList.map((todoItem) =>
              <ToDoItem todoItems={todoItem} />
            ) : <p>{errorMessage}</p>
        }
      </div>
    </div>
  )
}

export default App
