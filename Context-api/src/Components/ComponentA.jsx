import React, { createContext } from "react";
import { useContext } from "react";
import ComponentB from "./ComponentB";
import { useState } from "react";

export const UserContext = createContext();
function ComponentA() {
  const [user, setUser] = useState("Taher");
  return (
    <div className="box">
      <h1>Component A </h1>
      <h2>Hey {user}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
