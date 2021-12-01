import React from "react";
import Card from "../Components/Card";
export default function Display(props: any) {
  return (
    <div>
      {props.users
        ? props.users.map((item: any, i: any) => <Card user={item} />)
        : ""}
    </div>
  );
}
