import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/routes";
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      {/* <div className="App">
      <Header title="Header Ajay" />
      <Body />
    </div> */}
    </BrowserRouter>
  );
}

export default App;
