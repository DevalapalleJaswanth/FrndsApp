import React from "react";
import "../styles.css";
import { BsPersonSquare } from "react-icons/bs";
export default function Degree(props: any) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <BsPersonSquare
            style={{
              fontSize: "30px",
              color: "rgb(255, 99, 71)" /*'rgb(255, 214, 154)'*/
            }}
          />
          <div
            style={{
              fontSize: "20px",
              fontFamily: "Lucida Console, Courier New, monospace"
            }}
          >
            {" "}
            {props.data1.firstname + " " + props.data1.lastname}
          </div>
        </div>
        <span> </span>
        <div style={{ display: "flex" }}>
          <BsPersonSquare
            style={{
              fontSize: "30px",
              color: "rgb(255, 205, 71)" /*'rgb(255, 214, 154)'*/
            }}
          />
          <div
            style={{
              fontSize: "20px",
              fontFamily: "Lucida Console, Courier New, monospace"
            }}
          >
            {" "}
            {props.data2.firstname + " " + props.data2.lastname}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        {props.list
          ? props.list.map((item: any, i: any) => (
              <div style={{ display: "flex" }}>
                {item.map((item1: any, i: any) =>
                  i === item.length - 1 ? (
                    <div
                      style={{
                        fontSize: "10px",
                        fontFamily: "Lucida Console, Courier New, monospace"
                      }}
                    >
                      {props.users[item1].firstname +
                        " " +
                        props.users[item1].lastname +
                        " "}
                    </div>
                  ) : (
                    <div
                      style={{
                        fontSize: "10px",
                        fontFamily: "Lucida Console, Courier New, monospace"
                      }}
                    >
                      {props.users[item1].firstname +
                        " " +
                        props.users[item1].lastname +
                        " " +
                        " >"}
                    </div>
                  )
                )}
                <br></br>
                <br></br>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
