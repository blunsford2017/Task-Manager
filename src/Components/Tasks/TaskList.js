import React from 'react'
import Task from './Task';

class TaskList extends React.Component {
    render() {

        const { tasks } = this.props;

        return(
            <div className="taskList">
                {
                    tasks.map((_task, _index) => {
                        return(
                            <Task key={_index} task={_task} />
                        )
                    })
                }
            </div>
        );
    }
}

export default TaskList