import "./App.css";
import image from "./todo.jpg";
import imageDone from "./done.jpg";
import { ToDoList } from "./ToDoList";

function App() {
  return (
    <div className="App">
      <img src={ image } width="400px" alt="To Do List" />

      <h1>To Do List</h1>
      <ToDoList />
      <img src={ imageDone } width="400px" alt="Done" />
    </div>
  );
}

export default App;
