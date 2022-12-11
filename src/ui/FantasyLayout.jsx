import React from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const containerStyle = {
  width: "90%",
  paddingBottom: '180px',
  margin: "30px auto",
};

export const FantasyLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={containerStyle}>{children}</div>
      <Footer />
    </div>
  );
};
