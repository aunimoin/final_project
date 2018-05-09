import React from "react";

const FoodTruckItem = props => {
  const {
    name,
    image_url,
    categories,
    rating,
    review_count,
    coordinates,
    location
  } = props.foodTruckData;
  return (
    <div className="food-truck-list-item">
      <div className="food-truck-details">
        <h3 className="name">{name}</h3>
        <p className="details">Type/tags: {categories[0].title}</p>

        <p className="details">
          Rating: {rating}, Total reviews: {review_count}
        </p>
        <p className="details">Address: {location.display_address}</p>
      </div>
      <img className="image" src={image_url} />
    </div>
  );
};

export default FoodTruckItem;
