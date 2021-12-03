import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import AppStore from "../Store/AppStore";
import Display from "./Display";
import Details from "./Details";
import Addperson from "../Components/Addperson";
import Degree from "./Degree";
import { Chooser } from "../Services/Chooser";
import { Selector } from "../Services/Selector";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { users, AddPerson, AddToFrnd } = useContext(AppStore);
  const [data, setData] = useState<any>();
  const [count, setCount] = useState<any>(0);
  //let navigate = useNavigate();
  //console.log("output", Selector(-1, users[5], users[4], users));
  let list: any = [];
  let list2: any = [];
  const DegOfSepfunc: any = (c: any) => {
    list.push(c);

    if (list.length === 2) {
      list2 = [...Selector(-1, users[list[0]], users[list[1]], users)];
      setData(list2);
      setCount(list);
    }
    console.log(c, list, list2);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Router>
          <div style={{ alignItems: "center" }}>
            <Link
              to="/"
              style={{
                fontSize: "18px",
                fontFamily: "Lucida Console, Courier New, monospace",
                textDecoration: "none",
                color: "Black"
              }}
              onClick={() => {
                setData(null);
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
                color: "Black",
                padding: "10px"
              }}
            >
              ADD+
            </Link>
          </div>
          <br></br>

          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {data ? (
                    <Degree
                      users={users}
                      data1={users[count[0]]}
                      data2={users[count[1]]}
                      list={data}
                    />
                  ) : (
                    <Display
                      users={users}
                      text1="Select"
                      text2="UnSelect"
                      callback={DegOfSepfunc}
                    />
                  )}
                </div>
              }
            ></Route>
            <Route
              path="/Details/:id"
              element={<Details users={users} />}
            ></Route>
            <Route path="/Addperson" element={<Addperson />}></Route>
            <Route
              path="/Degree"
              element={
                <Degree
                  users={users}
                  list={data}
                  data1={users[count[0]]}
                  data2={users[count[1]]}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}
