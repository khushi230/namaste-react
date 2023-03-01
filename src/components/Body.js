import React, { useState, useEffect } from "react";
import axios from "axios";

import { restaurantArray } from "../utils/constants";

import Restaurant from "./Restaurant";

const filterData = (searchInput) => {
  let filteredArray = restaurantArray;
  if (searchInput) {
    searchInput = searchInput.toLowerCase();
    filteredArray = restaurantArray.filter((restaurant) => {
      let flag = 0;
      const restaurantNameLowercased = restaurant.data.name.toLowerCase();

      if (restaurantNameLowercased.includes(searchInput)) flag = 1;

      restaurant.data.cuisines.forEach((cuisine) => {
        const cuisineLowercase = cuisine.toLowerCase();
        if (cuisineLowercase.includes(searchInput)) flag = 1;
      });

      if (flag === 1) return true;
      return false;
    });
  }
  console.log("called..");
  return filteredArray;
};

const Body = () => {
  const [searchInput, setsearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantArray);

  filterData();

  const inputChangeHandler = (e) => {
    setsearchInput(e.target.value);
    const filteredData = filterData(e.target.value);
    setRestaurants(filteredData);
  };

  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <Restaurant {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
