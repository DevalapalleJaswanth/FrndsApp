import React from "react";
export type Content = {
  users: any;
  AddPerson: (data: object, frnds: object) => void;
  AddToFrnd: (id: any, data: object) => void;
  updateFrnds: (id: any, data1: object, data2: object) => void;
};
const AppStore = React.createContext<Content>({
  users: [],
  AddPerson: () => {},
  AddToFrnd: () => {},
  updateFrnds: () => {}
});
export default AppStore;
