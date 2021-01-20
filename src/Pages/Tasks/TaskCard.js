import Form from '../Form/Form';
import { useState } from 'react';

const TaskCard = (props) => {

    const [formVisible, setFormVisible] = useState(false);

    function toggleForm() {
        setFormVisible(!formVisible);
    }

    return (
        <>
        {
            formVisible ?
            <div className="task-card">
                <div className="card">
                <div className="card-header">
                        <h1 className="task-title"> { props.task.task } </h1>
                    </div>
                    <div className="card-body">
                        <Form 
                            task={props.task}
                            handleSubmit={props.handleUpdate}
                            formVisible={formVisible}
                        />
                    </div>
                    <div className="card-footer">
                        <button className="btn" onClick={toggleForm}>Cancel</button>
                    </div>
                </div>
            </div>
            :
            <div className="task-card">
                <div className="card">
                    <div className="card-header">
                        <h1 className="task-title"> { props.task.task } </h1>
                        <button className="btn btn-success" onClick={toggleForm}> Update 
                        </button>
                        <button className="btn btn-warning" onClick={() => props.handleDelete(props.task)}> Delete 
                        </button>
                    </div>

                </div>
            </div>
        }
        </>
    );
}

export default TaskCard;
