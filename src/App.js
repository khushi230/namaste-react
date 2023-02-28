import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { restaurantArray } from "./utils/resturantArrayHelper";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Restaurant = ({ name, cuisines, cloudinaryImageId, avgRating }) => (
  <div className="card">
    <img
      src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
    />
    <div className="card-content">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  </div>
);

const Footer = () => <div>footer</div>;

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

root.render(<AppLayout />);
