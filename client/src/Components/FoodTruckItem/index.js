import React from 'react'

const FoodTruckItem = props => {
  // const {name, categories, image_url, rating, review_count, display_address, zip_code, latitude, longitude} = props.foodTruckData
  const {name, image_url, categories, rating, review_count, coordinates} = props.foodTruckData
  return (
    <div className='food-truck-list-item'>
      <div className='food-truck-details'>
        <h3 className='name'>Name: {name}</h3>
        <h5 className='details'>Tags: {categories[0].title}</h5>

        <h5 className='details'>Rating (0-5): {rating}</h5>
        <h5 className='details'>Total reviews: {review_count}</h5>
        <h5 className='details'>Lat: {coordinates.latitude}</h5>
        <h5 className='details'>Lng: {coordinates.longitude}</h5>

        <img className='image' src={image_url} />
      </div>
    </div>
  )
}

export default FoodTruckItem;
