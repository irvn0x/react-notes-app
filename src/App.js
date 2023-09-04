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
  return (
    <>
      <nav className="nav">
        <img src={shoppingicon} alt="icon" className="nav-icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <from className="form">
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
        </from>

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

                    <button className="todo-action-button">
                      <img src={minusIcon} alt="minus icon" />
                    </button>

                    <button className="todo-action-button">
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
