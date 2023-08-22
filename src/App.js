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
    </>
  );
}

export default App;
