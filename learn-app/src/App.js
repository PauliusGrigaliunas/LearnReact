import React from "react";
import "./App.css";
import Post from "./Component/Post";
import PostForm from "./Component/PostForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Post App</p>
        <PostForm />
      </header>
      <Post />
    </div>
  );
}

export default App;
