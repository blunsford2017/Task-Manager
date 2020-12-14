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
            <div className="AddTask">
                <form onSubmit={(event) => this.submitTask(event)}>
                    <input id='addTaskInput' onChange={(event) => this.updateInput(event)} type="text" placeholder="Add Task" />
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
        this.props.addTaskFn(this.state.task);
        document.getElementById('addTaskInput').value='';
    }
}

export default AddTask;