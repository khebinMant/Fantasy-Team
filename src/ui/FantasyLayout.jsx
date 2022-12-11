import React from "react";
import { NavBar } from "./components/NavBar";


export const FantasyLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div >{children}</div>
    </div>
  );
};
