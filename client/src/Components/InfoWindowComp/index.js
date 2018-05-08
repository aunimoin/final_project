import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class InfoWindowComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  handleToggleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <Marker
        position={{
          lat: this.props.truck.coordinates.latitude,
          lng: this.props.truck.coordinates.longitude
        }}
        key={this.props.truck.id}
        onClick={() => this.handleToggleOpen()}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.handleToggleClose}>
            <h3>{this.props.truck.name}</h3>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default InfoWindowComp;
