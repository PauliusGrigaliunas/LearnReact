import React from "react";
import "./App.css";
import Main from "./Component/Main";
import PostForm from "./Component/PostForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Post App</p>
        <PostForm />
      </header>
      <Main />
    </div>
  );
}

export default App;
