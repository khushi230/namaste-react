import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ContainerComponent = () => (
  <div>
    <h1>Heading 1</h1>
    <h2>heading 2</h2>
  </div>
);

root.render(<ContainerComponent />);
