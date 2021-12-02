import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DetailsCard from "../Components/DetailsCard";
import Friends from "./Friends";
import Display from "./Display";
export default function Details(props: any) {
  let params = useParams<any>();
  const [swich, setSwich] = useState<any>(0);
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
        <button
          onClick={() => {
            setSwich(0);
          }}
        >
          Friends
        </button>
        <button
          onClick={() => {
            setSwich(1);
          }}
        >
          Add New
        </button>
      </div>
      <div>
        {swich === 0 ? (
          <Friends
            users={props.users ? props.users : {}}
            frnds={data[0] ? data[0].friends : {}}
            text="UnFriend"
          />
        ) : (
          <Display users={props.users} text="Add+" />
        )}
      </div>
    </div>
  );
}
