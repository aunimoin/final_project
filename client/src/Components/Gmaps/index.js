import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


class Gmaps extends Component {
  render() {
    const {coordinates} = props.foodTruckData

    const MyMapComponent = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.7398848, lng: -73.9922705 } }
        defaultZoom = { 13 }
      >
      <Marker position={{ lat: {coordinates.latitude}, lng: {coordinates.longitude} }}
      />
      </GoogleMap>

   ));
   return(
      <div>
        <MyMapComponent
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default Gmaps;
