import { Component } from "react";

export class ToDoList extends Component {
  state = {
    input: "",
    list: [],
  };

  onChangeEvent(event) {
    this.setState({ input: event });
  }

  addItem(input) {
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({ list: listArray, input: "" });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="What do you want to do?"
            onChange={(event) => {
              this.onChangeEvent(event.target.value);
            }}
            value={this.state.input}
          />
        </div>
        <div>
          <button onClick={() => this.addItem(this.state.input)}>Add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
