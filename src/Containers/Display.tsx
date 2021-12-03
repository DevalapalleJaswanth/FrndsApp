import React from "react";
import Card from "../Components/Card";
export default function Display(props: any) {
  return (
    <div>
      {props.users
        ? props.users.map((item: any, i: any) => (
            <div style={{ display: "flex" }}>
              <Card
                user={item}
                text1={props.text1}
                text2={props.text2}
                callback={props.callback}
              />
            </div>
          ))
        : ""}
    </div>
  );
}
