import { useState, useEffect } from "react";
import Input from "./Input.js";

function Form(props) {
  const [formState, setFormState] = useState({
    task: "",
    height: "",
    weight: "",
    description: "",
  });

  useEffect(() => {
    if (props.task) {
      setFormState({
        task: props.task.name,
        id: props.task.id,
      });
    }
  }, [props.task]);

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.task) formState.id = props.task.id;
    props.handleSubmit(event, formState);
    formState.task = "";
  }

  function isFormValid() {
    return !(
      formState.task
    );
  }

  return (
    <div className="form" id="formInputArea">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <small> Task</small>
          <Input
            handleChange={handleChange}
            task="task"
            placeholder="Task"
            type="text"
            value={formState.task}
            id="task"
          />
          <br />
          <button className="btn" type="submit" disabled={isFormValid()}>
            {props.task ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;