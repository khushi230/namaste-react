//---------------create root in which react code will render---------
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1", {}, "heading 1");
const heading2 = React.createElement("h2", {}, "heading 2");
const list = React.createElement("li", {}, "list");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

root.render(container);
