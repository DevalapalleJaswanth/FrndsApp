import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppStore from "../Store/AppStore";
import Display from "./Display";
import Details from "./Details";
import Addperson from "../Components/Addperson";
import { Chooser } from "../Services/Chooser";
import { Selector } from "../Services/Selector";
export default function Home() {
  const { users, AddPerson, AddToFrnd } = useContext(AppStore);
  const [data, setData] = useState<any>();
  console.log("output", Selector(-1, users[5], users[4], users));
  return (
    <Router>
      <Link
        to="/"
        style={{
          fontSize: "18px",
          fontFamily: "Lucida Console, Courier New, monospace",
          textDecoration: "none",
          color: "Black"
        }}
      >
        Home
      </Link>
      <span> </span>
      <Link
        to="/Addperson"
        style={{
          fontSize: "18px",
          fontFamily: "Lucida Console, Courier New, monospace",
          textDecoration: "none",
          color: "Black"
        }}
      >
        ADD+
      </Link>

      <Routes>
        <Route exact path="/" element={<Display users={users} />}></Route>
        <Route
          exact
          path="/Details/:id"
          element={<Details users={users} />}
        ></Route>
        <Route exact path="/Addperson" element={<Addperson />}></Route>
      </Routes>
    </Router>
  );
}
