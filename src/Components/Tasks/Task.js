import React from 'react'

class Task extends React.Component {
    render() {
        const { task } = this.props;

        return(
            <div onClick={this.toggleTask}>
                {task}
            </div>
        );

        
    }
}

export default Task;