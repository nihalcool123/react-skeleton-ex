import React from "react";
import "./style.css";
import Articles from "./components/Articles"
import User from "./components/User"

export default function App() {
  return (
    <div>
      <header>
        <h1> React Skeletons</h1>
      </header>

      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}
