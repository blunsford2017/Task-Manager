import React from 'react';
import ReactDom from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddTask from '../Components/Tasks/AddTask';
import TaskList from '../Components/Tasks/TaskList'


class DashboardPage extends React.Component {
    constructor(){
        super();
        this.state = {
            tasks: []
        }
    }

    render() {
     return(
     <main className="Page">
         <h1>Your Dashboard</h1>
         <div>
             <AddTask addTaskFn={this.addTask} />
             <TaskList updateTaskFn={this.updateTask} tasks={this.state.tasks} />
         </div>
      </main>
     );
    }


    componentDidMount = () => {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            const savedTasks = JSON.parse(tasks);
            this.setState({ tasks: savedTasks });
        } else {
            console.log ('No tasks')
        }
    }

    addTask = async (task) => {
        await this.setState({ tasks: [...this.state.tasks, {
            text: task,
            completed: false,
        }]});
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
}

export default DashboardPage;