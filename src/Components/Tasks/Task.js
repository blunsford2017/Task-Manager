import React from 'react'

class Task extends React.Component {
    getInitalState = function() {
        return{editing: false}
    }

    Edit =  function () {
        this.setState({editing: true});
    }
    
    Remove =  function () {
         alert('Remove comment')
     }

     Save =  function () {
        this.setState({editing: false});
    }

    RenderNormal = funcion() {

        return(

            <div className="task" >
                {task.text}
                <button onClick={this.Edit} className="btn btn-default">Edit</button>
                <button onClick={this.Remove} className="btn btn-default">Remove</button>
            </div>
        )
    }

    rednerForm = function () {
        return(

            <div className="task" >
                {task.text}
                <button onClick={this.Edit} className="btn btn-default">Edit</button>
                <button onClick={this.Remove} className="btn btn-default">Remove</button>
            </div>

        );
    }

    render() {
        const { task } = this.props;

        
    }
}

export default Task;