import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="big-container">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            placeholder="What are you working on today?"
            list="list"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
