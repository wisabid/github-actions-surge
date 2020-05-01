import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const marqueeStyle = {
    backgroundColor: "tomato",
    color: "red",
    fontSize: "100vh",
    lineHeight: "100vh",
  };
  return (
    <div className="App">
      <span style={marqueeStyle}>SOS</span>
    </div>
  );
}

export default App;
