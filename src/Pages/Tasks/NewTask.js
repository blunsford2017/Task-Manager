
import Form from '../Form/Form';

const NewTask = (props) => {
    return (
        <div className="form-group">
            <Form handleSubmit={props.handleAdd} />
        </div>
    );
}

export default NewTask;