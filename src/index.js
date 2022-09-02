import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";


export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <App />
      </UserContext.Provider>
      </BrowserRouter>
  );
};


export default render(
  <Root />,
  
  document.getElementById("root")
);
