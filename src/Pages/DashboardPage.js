// import { Link } from 'react-router-dom';
import TaskCardHolder from './Tasks/TaskCardHolder';
import NewTask from './Tasks/NewTask';

import { useState, useEffect } from 'react';

export default function DashboardPage(props) {

      useEffect(() => {
        getTasks();
      }, []);
    
      const [taskData, setTaskState] = useState({ task: [] });
      
      function getTasks() {
        fetch('/tasks')
        .then(response => response.json())
        .then(json => setTaskState({ tasks: json }))
        .catch(error => console.error(error));
      }
    
      function handleAdd(event, formInputs) {
        event.preventDefault()
        formInputs = JSON.stringify(formInputs);
        fetch('/tasks', {
          body: formInputs,
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
        .then(createdTask => createdTask.json())
        .then(jsonedTask => { setTaskState(prevState => 
          ({ tasks: [jsonedTask, ...prevState.tasks] }))
        })
        .catch(error => console.log(error))
      }
    
      function handleUpdate(event, formInputs) {
        event.preventDefault();
        fetch(`/tasks/${formInputs.id}`, {
          body: JSON.stringify(formInputs),
          method: 'PUT',
          headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
          }
        }
        .then(() => {
         getTasks();
        })
        .catch(error => console.log(error)));
      }
    
      function handleDelete(deletedTask) {
        fetch(`/tasks/${deletedTask.id}`, {
           method: 'DELETE',
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           }
         })
       .then(() => {
        getTasks();
       })
       .catch(error => console.log(error));
      }
    
    return (
        <main className="Page">
            <h1>Your Dashboard</h1>
            <div>
            <NewTask handleAdd={handleAdd} />
      
            <TaskCardHolder 
              Tasks={taskData.tasks}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />

            </div>
        </main>
    );
};