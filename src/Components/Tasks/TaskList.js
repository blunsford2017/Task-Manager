import React from 'react'
import Task from './Task';

class TaskList extends React.Component {
    render() {

        const { tasks } = this.props;

        return(
            <div className="taskList">
                {
                    tasks.map((_task) => {
                        return(
                            <Task task={_task} />
                        )
                    })
                }
            </div>
        );
    }
}

export default TaskList