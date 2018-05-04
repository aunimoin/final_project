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
      let center = this.props.foodTruckData ? (
        {lat: this.props.foodTruckData[0].coordinates.latitude,
          lng: this.props.foodTruckData[0].coordinates.longitude
        }
        ) : (
          { lat: 40.7398848, lng: -73.9922705 }
        )

    const MyMapComponent = withGoogleMap(props => (


      <GoogleMap
        center={center}
        // defaultCenter = { { lat: 40.7398848, lng: -73.9922705 } }
        zoom = { 12 }
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
