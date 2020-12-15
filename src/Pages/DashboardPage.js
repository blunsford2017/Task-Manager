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

  function handleRemove(index) {
    const newState = taskState.list.filter(item => {
      taskState.list.indexOf(item) !== index
    });

    setTaskState({ 
      list: newState
    });
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
              handleRemove={handleRemove}
              />

            </div>
        </main>
    );
};