import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Task from '../Components/Tasks/Task';
import AddTask from '../Components/Tasks/AddTask';

function DashboardPage (props) {

    const [ formState, setFormState ] = useState({
        tasks:[],
    });

    const tasks = localStorage.getItem('tasks');
        if (tasks) {
            const savedTasks = JSON.parse(tasks);
            this.setFormState({ tasks: savedTasks });
        } else {
            console.log ('No tasks')
        }



    return(
    <main className="Page">
        <h1>Your Dashboard</h1>
        <div>
            <AddTask />
            <Task />
        </div>
     </main>
    )
};

export default DashboardPage;