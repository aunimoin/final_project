import React from "react";
import FoodTruckItem from "../FoodTruckItem";

const FoodTruckList = (props) => {
  // Map over food truck array and display individual food truck component
let foodTruckItems = props.foodTruckData.map(truck => (
  <FoodTruckItem foodTruckData={truck} key={truck.id} />
  ));

  return (
    <div className="food-truck-list-cont">
      <h1 className="food-truck-list-title">ONLY FOOD TRUCKS</h1>
      <div className="">{foodTruckItems}</div>
    </div>
  );
};

export default FoodTruckList;
