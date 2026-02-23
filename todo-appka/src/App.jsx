import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Pobierz todos z backendu
  const fetchTodos = async () => {
    const res = await fetch("http://127.0.0.1:8000/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Dodaj todo
  const addTodo = async () => {
    if (!text) return;

    const newTodo = {
      id: Date.now(),
      title: text,
    };

    await fetch("http://127.0.0.1:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    setText("");
    fetchTodos();
  };

  // Usuń todo
  const deleteTodo = async (id) => {
    await fetch(`http://127.0.0.1:8000/todos/${id}`, {
      method: "DELETE",
    });

    fetchTodos();
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.inputRow}>
          <input
            style={styles.input}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add task..."
          />
          <button style={styles.addBtn} onClick={addTodo}>
            Add
          </button>
        </div>

        {todos.map((todo) => (
          <div key={todo.id} style={styles.todo}>
            <span>{todo.title}</span>
            <button
              style={styles.deleteBtn}
              onClick={() => deleteTodo(todo.id)}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#2f64c5",
    padding: "40px",
  },
  card: {
    background: "#eee",
    padding: "40px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  inputRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "30px",
  },
  input: {
    flex: 1,
    padding: "14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  addBtn: {
    background: "#2f64c5",
    color: "white",
    border: "none",
    padding: "14px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  todo: {
    background: "#cfe3e6",
    padding: "16px",
    borderRadius: "10px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "16px",
  },
  deleteBtn: {
    background: "#2f64c5",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default App;