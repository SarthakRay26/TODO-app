import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  

  const [todoItems, setTodoItems] = useState([]);

  const onNewItem =( itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date:  ${itemDueDate}`);
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  }

  return (
    <div className ="todo-container">
      <AppName />
      <AddTodo onNewItem={onNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems  todoItems={todoItems}/>
    </div>
  );
}

export default App;