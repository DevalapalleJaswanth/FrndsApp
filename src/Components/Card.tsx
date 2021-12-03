import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsPersonSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function Card(props: any) {
  const [border, setBorder] = useState("0px solid black");
  const [data1, setData1] = useState<any>(props.text1);
  //const [data2, setData2] = useState<any>();
  //const [count, setCount] = useState<any>(0);
  const [color, setColor] = useState("rgb(0, 133, 255)");
  let navigate = useNavigate();
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
  const buttonstyle = {
    backgroundColor: color
  };

  const hoverin = (e: any) => {
    setBorder("1px solid black");
  };
  const hoverout = (e: any) => {
    setBorder("0px solid black");
  };
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "rgb(240, 240, 240)",
        width: "300px",
        border: border,
        padding: "10px",
        margin: "10px",
        outlineStyle: "outset",
        outlineColor: "grey",
        display: "flex"
      }}
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
            to={`/Details/${props.user.id}`}
            style={{ textDecoration: "none", color: "Black" }}
            /*onClick={() => {
              navigate(`/Details/${props.user.id}`);
            }}*/
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
          <button
            style={buttonstyle}
            onClick={() => {
              setData1(props.text2);
              props.callback(props.user.id);
            }}
          >
            {data1}
          </button>
        </div>
      </div>
    </div>
  );
}
