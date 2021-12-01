import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonSquare } from "react-icons/bs";

export default function Card(props: any) {
  const [border, setBorder] = useState("0px solid black");

  const cardstyle = {
    position: "relative",
    backgroundColor: "rgb(240, 240, 240)",
    width: "300px",
    border: border,
    padding: "10px",
    margin: "10px",
    outlineStyle: "outset",
    outlineColor: "grey",
    display: "flex"
  };

  const hoverin = (e: any) => {
    setBorder("1px solid black");
  };
  const hoverout = (e: any) => {
    setBorder("0px solid black");
  };
  return (
    <div
      style={cardstyle}
      onMouseOver={(e) => {
        hoverin(e);
      }}
      onMouseOut={(e) => {
        hoverout(e);
      }}
    >
      {props.user ? (
        props.user.id % 2 === 0 ? (
          <BsPersonSquare
            style={{
              fontSize: "30px",
              color: "rgb(255, 99, 71)" /*'rgb(255, 214, 154)'*/
            }}
          />
        ) : (
          <BsPersonSquare
            style={{
              fontSize: "30px",
              color: "rgb(255, 205, 71)" /*'rgb(255, 214, 154)'*/
            }}
          />
        )
      ) : (
        ""
      )}

      <div
        style={{
          fontSize: "20px",
          fontFamily: "Lucida Console, Courier New, monospace"
        }}
      >
        {props.user === {} ||
        props.user === undefined ||
        props.user === null ? (
          ""
        ) : (
          <Link
            to={`Details/${props.user.id}`}
            style={{ textDecoration: "none", color: "Black" }}
          >
            {props.user.firstname + " " + props.user.lastname}
          </Link>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0"
        }}
      >
        <div
          style={{
            fontSize: "10px",
            fontFamily: "Lucida Console, Courier New, monospace"
          }}
        >
          Optional
        </div>
      </div>
    </div>
  );
}
