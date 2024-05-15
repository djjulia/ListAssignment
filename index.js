function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ]);
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
    setValue('');
  }

  const handleRemove = index => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <div className="todo" key={i}>
            <span>{todo.text}</span>
            <button onClick={() => handleRemove(i)}>Remove</button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo ..."
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);