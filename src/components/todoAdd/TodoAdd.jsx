import "./index.css";

const TodoAdd = ({ callback, value, setValue }) => {
  return (
    <div className="TodoAdd">
      <form className="TodoAdd_form" onSubmit={callback}>
        <input
          className="TodoForm_input"
          type="text"
          placeholder="Add a to-do"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input className="TodoForm_button" type="submit" value="+" />
      </form>
    </div>
  );
};

export default TodoAdd;
