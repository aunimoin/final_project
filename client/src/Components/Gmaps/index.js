import React, { Component } from "react";
import "../../App.css";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapComponent = withGoogleMap(props => (
  <GoogleMap center={props.center} zoom={12}>
    {props.markers}
  </GoogleMap>
));

class Gmaps extends Component {
  constructor(props) {
    super(props);
    apiDataLoaded: false;
  }

  render() {
    let markers = this.props.foodTruckData ? (
      this.props.foodTruckData.map(truck => (
        <Marker
          position={{
            lat: truck.coordinates.latitude,
            lng: truck.coordinates.longitude
          }}
          key={truck.id}
        />
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
