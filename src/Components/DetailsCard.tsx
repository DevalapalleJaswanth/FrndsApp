import React from "react";
import { BsPersonSquare } from "react-icons/bs";
export default function DetailsCard(props: any) {
  return (
    <div>
      <div>
        {props.user[0] ? (
          props.user[0].id % 2 === 0 ? (
            <BsPersonSquare
              style={{
                fontSize: "50px",
                color: "rgb(255, 99, 71)" /*'rgb(255, 214, 154)'*/
              }}
            />
          ) : (
            <BsPersonSquare
              style={{
                fontSize: "50px",
                color: "rgb(255, 205, 71)" /*'rgb(255, 214, 154)'*/
              }}
            />
          )
        ) : (
          ""
        )}
      </div>
      <div>
        {props.user[0] ? (
          <div>
            <div
              style={{
                fontSize: "30px",
                fontFamily: "Lucida Console, Courier New, monospace"
              }}
            >
              {props.user[0].firstname + " " + props.user[0].lastname}
            </div>
            <div
              style={{
                fontSize: "20px",
                fontFamily: "Lucida Console, Courier New, monospace"
              }}
            >
              Works as {props.user[0].occupation}.
            </div>
            <div
              style={{
                fontSize: "20px",
                fontFamily: "Lucida Console, Courier New, monospace"
              }}
            >
              From {props.user[0].location}.
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
