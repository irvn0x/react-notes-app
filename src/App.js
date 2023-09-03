import { useState } from "react";

import "./App.css";

import shoppingicon from "./assets/shopping-icon.svg";

function App() {
  return (
    <>
      <nav className="nav">
        <img src={shoppingicon} alt="icon" className="nav-icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <from className="form">
          <input className="input" type="text" placeholder="Input your list" />
          <button className="add-button" type="submit">
            add
          </button>
        </from>
      </section>
    </>
  );
}

export default App;
