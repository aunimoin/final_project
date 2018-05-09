import React, { Component } from "react";
import InfoWindowComp from "../InfoWindowComp";
import { withGoogleMap, GoogleMap } from "react-google-maps";

// most of this code is from the react-google-maps docs
const MyMapComponent = withGoogleMap(props => (
  <GoogleMap center={props.center} zoom={12}>
    {props.markers}
  </GoogleMap>
));
// NYC is the default, but upon loading Yelp API data, markers
// are set and the map is centered around the first food truck
class Gmaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false
    };
  }
  render() {
    let markers = this.props.foodTruckData ? (
      this.props.foodTruckData.map(truck => (
        <InfoWindowComp truck={truck} key={truck.id} />
      ))
    ) : (
      <p> ® Auni Moin</p>
    );
    let center = this.props.foodTruckData
      ? {
          lat: this.props.foodTruckData[0].coordinates.latitude,
          lng: this.props.foodTruckData[0].coordinates.longitude
        }
      : { lat: 40.7398848, lng: -73.9922705 };

    return (
      <div className="map">
        <MyMapComponent
          markers={markers}
          center={center}
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Gmaps;
