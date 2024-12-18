import { useEffect } from "react";
import { useState } from "react"
import ToDoItem from "./components/todo-item";
import classes from './styles.module.css'
import ToDoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

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

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId)
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details = await apiResponse.json();
      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchToDoList();
  }, []);

  if(loading) return <Skeleton variant="rectangular" width={650} height={650}></Skeleton>
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>ToDo List App</h1>
      <div className={classes.toDoListWrapper}>
        {
          todoList && todoList.length > 0 ?
            todoList.map((todoItem) =>
              <ToDoItem
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                todoItems={todoItem} />
            ) : <p>{errorMessage}</p>
        }
      </div>
      <ToDoDetails
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        setTodoDetails={setTodoDetails}
        todoDetails={todoDetails} />
    </div>
  )
}

export default App
