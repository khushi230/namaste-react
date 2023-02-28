import React from "react";

const RestaurantList = () => (
  <div className="restaurant-list">
    {restaurantArray.map((restaurant) => (
      <Restaurant {...restaurant.data} key={restaurant.data.id} />
    ))}
  </div>
);

export default RestaurantList;
