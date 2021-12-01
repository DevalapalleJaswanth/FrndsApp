import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DetailsCard from "../Components/DetailsCard";
import Friends from "./Friends";
export default function Details(props: any) {
  let params = useParams<any>();
  let user: any =
    props.users && params.id
      ? props.users.map((item: any, i: any) => {
          if (item.id == params.id) {
            return item;
          } else {
            return 0;
          }
        })
      : {};
  let data: any =
    user !== {}
      ? user.filter((value: any, index: any, array: any) => {
          return value !== 0;
        })
      : {};
  return (
    <div>
      <div>
        <DetailsCard user={data} />
      </div>
      <div>
        <Friends
          users={props.users ? props.users : {}}
          frnds={data[0] ? data[0].friends : {}}
        />
      </div>
    </div>
  );
}
