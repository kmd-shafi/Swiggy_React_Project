import React from "react";
import ReactDOM from "react-dom";

const heading = <h1>hello jsx 🧑‍🚀 </h1>;

const Heading = () => (
  <div>
    {heading} <h1 id="react">hello react(*^_^*)✌️</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
