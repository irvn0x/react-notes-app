import { useState } from "react";

import "./App.css";

import shoppingicon from "./assets/shopping-icon.svg";
import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Mouse Logitech", count: 1 },
    { title: "Keyboard Vortex Series", count: 1 },
    { title: "Headset DBE", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return alert("List tidak boleh kosong!");
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditionalCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      /*
      selama jumlah count masih diatas 0
      maka bisa melakukan pengurangan
      */
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      /*
      kalau sudah 0 dan masih ingin dikurangi juga
      akan menghapus array value dengan index yang sesuai
      */
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  return (
    <>
      <nav className="nav">
        <img src={shoppingicon} alt="icon" className="nav-icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="input"
            type="text"
            placeholder="Input your list"
          />
          <button className="add-button" type="submit">
            add
          </button>
        </form>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div
                  key={index}
                  className={`todo ${
                    !(arr.length === index + 1) && "todo-divider"
                  }`}
                >
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button
                      onClick={() => handleSubstractionCount(index)}
                      className="todo-action-button"
                    >
                      <img src={minusIcon} alt="minus icon" />
                    </button>

                    <button
                      onClick={() => handleAdditionalCount(index)}
                      className="todo-action-button"
                    >
                      <img src={plusIcon} alt="plus icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;
