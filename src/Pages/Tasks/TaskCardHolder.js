import TaskCard from './TaskCard';

const TaskCardHolder = (props) => {
    return (
        
        <div className="card-holder"> 
            {props.tasks.map(task => 
               <TaskCard 
                key={task.id} 
                task={task} 
                handleUpdate={props.handleUpdate}
                handleDelete={props.handleDelete}
                /> 
            )}
            
        </div>
    );
}

export default TaskCardHolder;
