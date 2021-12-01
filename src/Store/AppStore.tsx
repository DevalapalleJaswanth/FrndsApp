import React from "react";
export type Content = {
  users: any;
  AddPerson: (data: object, frnds: object) => void;
  AddToFrnd: (id: any, data: object) => void;
};
const AppStore = React.createContext<Content>({
  users: [],
  AddPerson: () => {},
  AddToFrnd: () => {}
});
export default AppStore;
