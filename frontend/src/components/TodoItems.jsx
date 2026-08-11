import {useContext} from "react";
import {TodoItemsContext} from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
         key={item._id}
         todoId={item._id}
         todoDate={item.dueDate}
         todoName={item.name}
         />
      ))}
    </div>
  )
};
export default TodoItems;