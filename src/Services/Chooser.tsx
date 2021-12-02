export const Chooser: any = (prev: any, data1: any, data2: any, users: any) => {
  for (let i = 0; i < data1.friends.length; i++) {
    let arr: any = [];
    console.log("id", data1.id, "now", data1.friends[i]);

    if (data1.friends[i] == data2.id) {
      arr.push(data1.id);
      arr.push(data2.id);
      console.log(arr);

      return arr;
    } else if (data1.friends[i] == prev) {
      console.log([-1]);

      continue;
      //return [-1];
    } else {
      console.log(data1.id, users[data1.friends[i]], data2, users);
      return [
        data1.id,
        ...Chooser(data1.id, users[data1.friends[i]], data2, users)
      ];
    }
  }
};
