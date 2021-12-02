import { Chooser } from "./Chooser";
export const Selector: any = (
  prev: any,
  data1: any,
  data2: any,
  users: any
) => {
  let list: any = [];
  for (let i = 0; i < data1.friends.length; i++) {
    let arr: any = [];
    console.log("now", data1.friends[i]);

    if (data1.friends[i] == data2.id) {
      arr.push(data1.id);
      arr.push(data2.id);
      console.log(arr);
      //return arr;
      list.push(arr);
    } else if (data1.friends[i] == prev) {
      console.log([-1]);
      //return [-1];
      list.push([-1]);
    } else {
      console.log(data1.id, users[data1.friends[i]], data2, users);
      list.push([
        data1.id,
        ...Chooser(data1.id, users[data1.friends[i]], data2, users)
      ]);
    }

    //return [...Chooser(-1, users[data1.friends[i]], data2, users)];
  }
  return list;
};
