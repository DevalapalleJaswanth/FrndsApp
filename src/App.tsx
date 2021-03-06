import React, { useState } from "react";
import Addperson from "./Components/Addperson";
import AppStore from "./Store/AppStore";
import Card from "./Components/Card";
import Home from "./Containers/Home";

export default function App() {
  const [users, setUsers] = useState<any>([
    {
      id: 0,
      firstname: "Riya",
      lastname: "pears",
      occupation: "Professor",
      location: "South Africa",
      friends: [1, 2, 4]
    },
    {
      id: 1,
      firstname: "Ronald",
      lastname: "Darcy",
      occupation: "Software Engineer",
      location: "South America",
      friends: [0, 3]
    },
    {
      id: 2,
      firstname: "Boyka",
      lastname: "Darcy",
      occupation: "Software Engineer",
      location: "Newzeland",
      friends: [0, 5]
    },
    {
      id: 3,
      firstname: "Christaphor",
      lastname: "Ronald",
      occupation: "Coach",
      location: "Jamaica",
      friends: [1, 4]
    },
    {
      id: 4,
      firstname: "Pooja",
      lastname: "Singh",
      occupation: "Writer",
      location: "India",
      friends: [5, 3, 0]
    },
    {
      id: 5,
      firstname: "Jasvi",
      lastname: "Preeth",
      occupation: "Director",
      location: "India",
      friends: [2, 4]
    }
  ]);
  function AddPerson(data: any, frnds: any) {
    let list: any = users;
    let l: any = list.length;

    list.push({ ...data, id: l, friends: frnds });

    setUsers([...list]);
    console.log(users);
  }
  function AddToFrnd(id: any, data: any) {
    let list: any = [];
    let updateddata: any = users.map((item: any, i: any) => {
      if (item.id === id) {
        list = [...item.friends, data];
        return { ...item, friends: list };
      }
      return item;
    });
    setUsers(updateddata);
  }
  function updateFrnds(id: any, data1: any, data2: any) {
    console.log(data1, data2);
    //data1.friends.push(data2.id);
    //data2.friends.push(data1.id);
    let list: any = users.map((item: any, i: any) => {
      if (item.id === data1.id) {
        // list = [...item.friends, data];
        return { ...data1 };
      }
      if (item.id === data2.id) {
        return { ...data2 };
      }
      return item;
    });
    //console.log(list);
    setUsers(list);
  }
  return (
    <div>
      <AppStore.Provider value={{ users, AddPerson, AddToFrnd, updateFrnds }}>
        <Home />
      </AppStore.Provider>
    </div>
  );
}
