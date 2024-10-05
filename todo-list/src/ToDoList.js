import { Component } from 'react';

export class ToDoList extends Component {
    state = {
        
    }

    onChangeEvent(event) {
        console.log(event.target.value);
        
    }

    render() {
        return(
            <div>
                <input 
                type="text" 
                placeholder='What do you want to do?'
                onChange={ this.onChangeEvent } />
            </div>
        )
    }
}