import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppStore from "../Store/AppStore";
import Display from "./Display";
import Details from "./Details";
export default function Home() {
  const { users, AddPerson, AddToFrnd } = useContext(AppStore);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Display users={users} />}></Route>
        <Route
          exact
          path="/Details/:id"
          element={<Details users={users} />}
        ></Route>
      </Routes>
    </Router>
  );
}
