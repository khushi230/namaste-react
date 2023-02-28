import React from "react";

import Restaurant from "./Restaurant";

import { restaurantArray } from "../utils/constants";

const RestaurantList = () => (
  <div className="restaurant-list">
    {restaurantArray.map((restaurant) => (
      <Restaurant {...restaurant.data} key={restaurant.data.id} />
    ))}
  </div>
);

export default RestaurantList;
