import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Display from "./Display";
export default function Friends(props: any) {
  // let params = useParams<any>();
  console.log(props);
  let user: any =
    props.users && props.frnds
      ? props.users.map((item: any, i: any) => {
          let list: any = [];
          props.frnds.map((frnd: any, j: any) => {
            if (item.id == frnd) list.push(item);
          });
          return list;
        })
      : {};
  let data: any =
    user !== {}
      ? user.filter((value: any, index: any, array: any) => {
          return value.length !== 0;
        })
      : {};
  let frnds: any =
    data !== {}
      ? data.map((item: any, i: any) => {
          return item[0];
        })
      : {};
  return (
    <div>
      {console.log(frnds)}
      {props.frnds == [] ? (
        <div> "Yet to make friends"</div>
      ) : (
        <div>
          <Display
            users={frnds}
            text1={props.text1}
            text2={props.text2}
            callback={props.callback}
          />
        </div>
      )}
    </div>
  );
}
