import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Form from "./Form.jsx";

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 2px 0px" }}>
        <Form />
      </div>
    </>
  );
};

export default App;
