import React from "react";
import Main from "./pages/Main";
import Header from "./components/Header";
import './styles/Main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/todo-app/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
