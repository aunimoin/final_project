import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Gmaps extends Component {
  constructor (props){
    super(props)
    apiDataLoaded: false

  }
  render() {
    let markers = this.props.foodTruckData ? (
      this.props.foodTruckData.map(truck =>(
        <Marker position={{ lat: truck.coordinates.latitude, lng: truck.coordinates.longitude }}
        />
      ))) : (
        <p>Loading...</p>
      )

    const MyMapComponent = withGoogleMap(props => (

      <GoogleMap
        defaultCenter = { { lat: 40.7398848, lng: -73.9922705 } }
        defaultZoom = { 13 }
      >

      {markers}

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
