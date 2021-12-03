import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import DetailsCard from "../Components/DetailsCard";
import Friends from "./Friends";
import Display from "./Display";
import AppStore from "../Store/AppStore";
import { useNavigate } from "react-router-dom";
export default function Details(props: any) {
  const { updateFrnds } = useContext(AppStore);
  let params = useParams<any>();
  let navigate = useNavigate();
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
  console.log("user", user);
  let data: any =
    user !== {}
      ? user.filter((value: any, index: any, array: any) => {
          return value !== 0;
        })
      : {};
  let users = [...props.users];
  console.log("data", data);
  let addnew: any = data[0]
    ? props.users.map((item1: any, j: any) => {
        data[0] ? delete users[data[0].id] : "";
        let frnds: any = data[0]
          ? data[0].friends.map((item: any, i: any) => {
              if (item === item1.id) {
                delete users[item];
              }
            })
          : "";
      })
    : navigate("/");
  //console.log("addnew", users);
  let arr: any = users.filter((value: any, index: any, array: any) => {
    return value !== undefined;
  });
  //console.log("arr", arr);
  const getFrnd = (id: any) => {
    console.log(id, props.users);
    let user1: any = props.users
      ? props.users.map((item: any, i: any) => {
          if (item.id == id) {
            return item;
          } else {
            return 0;
          }
        })
      : [];
    console.log(user1);
    let data1: any =
      user1 && user1 !== {}
        ? user1.filter((value: any, index: any, array: any) => {
            return value !== 0;
          })
        : {};
    console.log(data[0]);
    console.log(data1[0]);
    data[0].friends.push(data1[0].id);
    data1[0].friends.push(data[0].id);
    updateFrnds(data[0].id, data[0], data1[0]);
    navigate(`/Details/${data[0].id}`);
  };
  const decFrnd = (id: any) => {
    let user1: any = props.users
      ? props.users.map((item: any, i: any) => {
          if (item.id == id) {
            return item;
          } else {
            return 0;
          }
        })
      : {};
    console.log(user1);
    let data1: any = user1
      ? user1.filter((value: any, index: any, array: any) => {
          return value !== 0;
        })
      : {};
    let list1: any = data[0].friends.filter((value: any, index: any) => {
      return value !== data1[0].id;
    });
    let list2: any = data1[0].friends.filter((value: any, index: any) => {
      return value !== data[0].id;
    });
    data[0].friends = list1;
    data1[0].friends = list2;
    updateFrnds(data[0].id, data[0], data1[0]);
    navigate(`/Details/${data[0].id}`);
  };

  return (
    <div>
      <div>
        <DetailsCard user={data} />
      </div>
      <br></br>
      <br></br>
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
            frnds={data[0] ? data[0].friends : []}
            text1="UnFriend"
            text2="UnFriend"
            callback={decFrnd}
          />
        ) : (
          <Display users={arr} text1="Add+" text2="Add+" callback={getFrnd} />
        )}
      </div>
    </div>
  );
}
