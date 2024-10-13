import { Component } from "react";
import check from "./logo.png";

export class ToDoList extends Component {
  state = {
    input: "",
    list: [],
  };

  onChangeEvent(event) {
    this.setState({ input: event });
  }

  addItem(input) {
    if (input === "") {
      alert("Please enter a task");
    } else {
      let listArray = this.state.list;
      listArray.push(input);
      this.setState({ list: listArray, input: "" });
    }
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.list;
    listArray = [];
    this.setState({ list: listArray });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What do you want to do?"
              onChange={(event) => {
                this.onChangeEvent(event.target.value);
              }}
              value={this.state.input}
            />
          </div>
          <div className="container">
            <button
              onClick={() => this.addItem(this.state.input)}
              className="btn add"
            >
              Add
            </button>
          </div>
          <ul>
            {this.state.list.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={check} width="25px" alt="Task" />
                {item}
              </li>
            ))}
          </ul>
          <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}
