import React, { Component } from 'react'
import './App.css'
import FoodTruckList from './Components/FoodTruckList'
import FoodTruckItem from './Components/FoodTruckItem'
import Gmaps from './Components/Gmaps'


const yelp = require('yelp-fusion');

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      apiDataLoaded: false,
      foodTruckData: null,
      search: ""
    }
    this.apiData = this.apiData.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleInputChange(evt) {
    const search = evt.target.value;
    this.setState({ search });
  }

  onSubmit(evt) {
    evt.preventDefault();

    this.apiData()
  }
  // fetch data from yelp's api via my server
  // componentDidMount() {
  //   this.apiData();
  // }
  apiData() {
    // console.log("this is data:", this.state.search);
    fetch(`http://localhost:3300/api/${this.state.search}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          foodTruckData: res.data
        })
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>
            <label>
              Find Food Trucks{" "}
              <input
                type="text"
                onChange={this.handleInputChange}
                value={this.state.search} />
            </label>
            <input className="btn" type="submit" value="Search" />
          </p>
        </form>

      <div className="food-truck-cont">
        {this.state.foodTruckData ? (
          <FoodTruckList foodTruckData={this.state.foodTruckData} />
        ) : (
          <p>Loading, please wait...</p>
        )}
        </div>

        <div>
          <Gmaps foodTruckData={this.state.foodTruckData}
          apiDataLoaded={this.state.apiDataLoaded}
          />
        </div>
      </div>
    )
  }
}


export default App;
