function Input({ 
    task, 
    title, 
    type, 
    value, 
    placeholder, 
    handleChange }) {
      return (
        <>
          <label htmlFor={task}>{title}</label>
          <input
            id={task}
            task={task}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="form-control"
          />
        </>
      );
  }
  
  export default Input;
  