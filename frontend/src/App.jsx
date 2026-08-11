import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage"
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  {/*const initialtodoItems =[
    {
      name:"Buy Milk",

      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  const [todoItems,setTodoItems]=useState(initialtodoItems);
  const onNewItem=(itemName,itemDate)=>{
  console.log(`New Item Add ${itemName} ${itemDate}`);
  const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDate}]  
  setTodoItems(newTodoItems);
  }
  const handleDeleteItem = (todoItemName)=>{
    const newTodoItem=todoItems.filter((item)=>
      item.name!==todoItemName);
      setTodoItems(newTodoItem);
    
  }*/}
  return(
   <TodoItemsContextProvider>
   <center className="todo-container">
   <AppName/>
   <AddTodo/>
   <WelcomeMessage></WelcomeMessage>
   <TodoItems></TodoItems>
   </center>
   </TodoItemsContextProvider>   
  );

}
export default App;