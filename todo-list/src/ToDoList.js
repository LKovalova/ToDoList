import { Component } from 'react';

export class ToDoList extends Component {
    state = {
        input: "",
        list: []
    }

    onChangeEvent(event) {
        this.setState({input: event})
        console.log(event);
        
    }

    render() {
        return(
            <div>
                <input 
                type="text" 
                placeholder='What do you want to do?'
                onChange= {(event) => { this.onChangeEvent(event.target.value)}}
                value= { this.state.input }/>
            </div>
        )
    }
}