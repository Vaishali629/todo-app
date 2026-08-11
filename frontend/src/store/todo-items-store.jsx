import { useReducer, useEffect } from "react";
import { createContext } from "react";
import { fetchTodos, createTodo, deleteTodo } from "../apisevices/todo";

export const TodoItemsContext = createContext({
  todoItems:[],
  addNewItem: ()=>{},
  deleteItem: ()=>{},
});

const todoItemsReducer=(currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if(action.type === "SET_TODOS"){
    newTodoItems = action.payload.todos;
  } else if(action.type === "NEW_ITEM"){
    newTodoItems=[
    ...currTodoItems,
    {_id: action.payload._id, name: action.payload.name, dueDate: action.payload.dueDate},  
    ];
  } else if (action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter(
      (item) => item._id !== action.payload.id
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({children})=>{
  const[todoItems, dispatchTodoItems] = useReducer(todoItemsReducer,[]);

  // Fetch todos on component mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos = await fetchTodos();
        dispatchTodoItems({
          type: "SET_TODOS",
          payload: { todos }
        });
      } catch (error) {
        console.error("Failed to load todos:", error);
      }
    };
    loadTodos();
  }, []);

  const addNewItem = async (itemName, itemDueDate) => {
    try {
      const newTodo = await createTodo({ name: itemName, dueDate: itemDueDate });
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          _id: newTodo._id,
          name: newTodo.name,
          dueDate: newTodo.dueDate,
        }
      };
      dispatchTodoItems(newItemAction);
    } catch (error) {
      console.error("Failed to add todo:", error);
      alert("Error adding todo. Check console for details.");
    }
  };

  const deleteItem = async (todoId) => {
    try {
      await deleteTodo(todoId);
      const deleteItemAction ={
        type: "DELETE_ITEM",
        payload:{ id: todoId },
      };
      dispatchTodoItems(deleteItemAction);
    } catch (error) {
      console.error("Failed to delete todo:", error);
      alert("Error deleting todo. Check console for details.");
    }
  };

  return(
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;