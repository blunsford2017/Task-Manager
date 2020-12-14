import { useState } from 'react';
import { Link } from 'react-router-dom';
import { task } from '../Services/taskService'

function DashboardPage (props) {

    const [ formState, setFormState ] = useState({
        task: "",
        dueDate: "",
        done: ""
    });

    function formValid() {
        return !!(formState.task && formState.dueDate && formState.done)
    }

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.task]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(!formValid()) return;
        try {
            await task (formState);
            // calling a helper function defined in App.js to add the user to state
        } catch (error) {
            alert(error.message);
        }
    }

    return(
    <main className="Page">
        <h1>Your Dashboard</h1>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="col-sm-12">
                <input name="text" type="text" className="form-control" placeholder="Task" value={formState.task} onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input name="dueDate" type="Due Date" className="form-control" placeholder="dueDate" value={formState.dueDate} onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input name="done" type="done" className="form-control" placeholder="Done?" value={formState.done} onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12 text-center">
                    <input disabled={!formValid()} type="submit" className="btn btn-default" value="Make It" />
                    &nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </div>
            </div>
        </form>
     </main>
    )

};

export default DashboardPage;