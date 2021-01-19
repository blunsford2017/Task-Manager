import { useState } from 'react';
// import { Link } from 'react-router-dom';
import InputForm from './Tasks/InputForm';
import List from './Tasks/List';



export default function DashboardPage(props) {
  const [ taskState, setTaskState ] = useState({
    list: [],
    pendingItem: "",
});

    function handleChange(event) {
      setTaskState(prevState => ({
          ...prevState,
          [event.target.pendingItem]: event.target.value
      }));
  }

  function newItemSubmitHandler(event) {
    event.preventDefault();
    setTaskState({
      list: [
        {
          name: taskState.pendingItem,
        },
        ...taskState.list
      ],
      pendingItem: ""
    });
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
  })
   .then(() => {
     gettasks();
   })
   .catch(error => console.log(error));
  }

  function handleDelete(deletedTaks) {
    fetch(`/tasks/${deletedTask.id}`, {
       method: 'DELETE',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
     })
   .then(() => {
    gettasks();
   })
   .catch(error => console.log(error));
  }
    
    return (
        <main className="Page">
            <h1>Your Dashboard</h1>
            <div>
              <InputForm 
                className="input"
                type="text"
                onChange={handleChange}
                newItemSubmitHandler={newItemSubmitHandler}
                value={taskState.pendingItem}
                placeholder="Add Task"
              />

              <List 
              list={taskState.list} 
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              />

            </div>
        </main>
    );
};