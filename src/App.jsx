import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInfo,setTodoInfo] = useState(null);
  const [openDialog,setOpenDialog] = useState(false);
  async function fetchListOfTodos() {
  try {
    
      const response = await fetch("https://dummyjson.com/todos");
      const todoData = await response.json();


      if (todoData?.todos && todoData?.todos?.length > 0) {
        setTodoList(todoData?.todos);
      
      } else {
  
        setTodoList([]);
      }
    
  } catch (err) {
    console.error(err);
  }
}

  async function fetchInfoOfCurrentTodo(getCurrentTodoId){
    try {
      const response = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const todoDetails = await response.json();

      if(todoDetails){
        setTodoInfo(todoDetails);
        setOpenDialog(true);
      }else{
        setTodoInfo(null);
        setOpenDialog(false);
      }

    }catch(err){
      console.error(err);
    }
  }
  useEffect(() => {
    fetchListOfTodos();
  }, []);

  return (
  <div className={styles. mainWrapper}>
      <h1 className={styles.headerTitle}>Todo List using Material Ui</h1>
      <div className={styles.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
          todoList.map((todoItem,index) =><TodoItem fetchInfoOfCurrentTodo={fetchInfoOfCurrentTodo} todo = {todoItem} key={index}/>):null
        }
      </div>
      <TodoDetails setTodoInfo={setTodoInfo} setOpenDialog={setOpenDialog} openDialog={openDialog} todoInfo={todoInfo}/>
    </div>
  );
}

export default App;
