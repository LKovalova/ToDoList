import "./App.css";
import image from "./todo.jpg";
import imageDone from "./done.jpg";
import { ToDoList } from "./ToDoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={image} width="280px" alt="To Do List" />
      </div>
      <div className="container">
        <h1>To Do List</h1>
      </div>
      <ToDoList />
      <div className="container">
        <img src={imageDone} width="300px" alt="Done" />
      </div>
    </div>
  );
}

export default App;
