import React from "react";
import "../../App.css";

const FoodTruckItem = props => {
  // const {name, categories, image_url, rating, review_count, display_address, zip_code, latitude, longitude} = props.foodTruckData
  const {
    name,
    image_url,
    categories,
    rating,
    review_count,
    coordinates
  } = props.foodTruckData;
  return (
    <div className="food-truck-list-item">
      <div className="food-truck-details">
        <h3 className="name">{name}</h3>
        <p className="details">Tags: {categories[0].title}</p>

        <p className="details">Rating (0-5): {rating}</p>
        <p className="details">Total reviews: {review_count}</p>
      </div>
      <img className="image" src={image_url} />
    </div>
  );
};

export default FoodTruckItem;
