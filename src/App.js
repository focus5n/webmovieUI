import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import IndexMain from "./components/IndexMain";
import Login from "./components/signup/Login";
import SignUp from "./components/signup/SignUp";
import UserInfo from "./components/signup/UserInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexMain />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/userinfo" element={<UserInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
