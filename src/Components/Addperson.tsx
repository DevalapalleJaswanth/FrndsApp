import React, { useState, useContext } from "react";
import AppStore from "../Store/AppStore";
import { useNavigate } from "react-router-dom";
export default function Addperson() {
  const [firstname, setFirstname] = useState<any>("");
  const [lastname, setLastname] = useState<any>("");
  const [occupation, setOccupation] = useState<any>("");
  const [location, setLocation] = useState<any>("");
  const [err, setErr] = useState("");
  const { users, AddPerson, AddToFrnd } = useContext(AppStore);
  const [frnds, setFrnds] = useState<any>([]);
  let navigate = useNavigate();
  const submit = (e: any) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      occupation === "" ||
      location === ""
    ) {
      setErr("required!");
    } else {
      setErr("");
      let data: object = {
        firstname: firstname,
        lastname: lastname,
        occupation: occupation,
        location: location
      };
      console.log(firstname, lastname, occupation, location, data);
      AddPerson(data, frnds);
      console.log(users);
      navigate(`/Details/${users.length - 1}`);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e: any) => {
              setFirstname(e.target.value);
            }}
          />
          <div style={{ color: "blue", fontSize: "13px" }}>
            {firstname === "" ? err : ""}
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e: any) => {
              setLastname(e.target.value);
            }}
          />
          <div style={{ color: "blue", fontSize: "13px" }}>
            {lastname === "" ? err : ""}
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="What do you do?"
            onChange={(e: any) => {
              setOccupation(e.target.value);
            }}
          />
          <div style={{ color: "blue", fontSize: "13px" }}>
            {occupation === "" ? err : ""}
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Where are you from?"
            onChange={(e: any) => {
              setLocation(e.target.value);
            }}
          />
          <div style={{ color: "blue", fontSize: "13px" }}>
            {location === "" ? err : ""}
          </div>
        </div>

        <button type="submit">Join</button>
      </form>
    </div>
  );
}
