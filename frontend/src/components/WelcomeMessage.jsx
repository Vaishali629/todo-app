 import {useContext} from "react";
 import styles from "./WelcomeMessage.module.css";
 import {TodoItemsContext} from "../store/todo-items-store";

 const WelcomeMessage=()=>{
 const{todoItems} = useContext(TodoItemsContext);
 return(
  todoItems.length===0 && <p className={styles.welcome}>Enjoy Your Day</p>
 );
};
export default WelcomeMessage;



 {/*const Welcome=({todoItems})=>{
 return todoItems.length===0 && <h1>Enjoy your day</h1>

}
export default Welcome;*/}

