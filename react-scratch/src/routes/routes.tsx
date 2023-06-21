import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRouter;
