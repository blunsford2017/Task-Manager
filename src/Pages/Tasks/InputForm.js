export default function Inputfrom(props) {
    return(
        <form 
        onSubmit={props.newItemSubmitHandler} 
        className="taskInput">
            <input
                className="input"
                type="text"
                onChange={props.handleChange}
                value={props.taskState.pendingItem}
                placeholder="Add Task"
            />
            <button type="submit"name="submit" value="submit">
                  Add
            </button>
        </form>
    );
};