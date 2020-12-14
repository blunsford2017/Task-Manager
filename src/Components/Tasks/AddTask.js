import React from 'react';

// function AddTask (props) 
class AddTask extends React.Component{

    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={(event) => this.submitTask(event)}>
                    <input onChange={(event) => this.updateInput(event)} type="text" placeholder="Add Task" />
                    <button type='submit'>Add Task</button>
                </form>
            </div>
         );
}

    updateInput = (event) => {
        this.setState({ task: event.target.value });
    }

    submitTask = (event) => {
        event.preventDefault();
        console.log('submit', this.state);
    }
}

export default AddTask;