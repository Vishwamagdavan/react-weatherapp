import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './component/wheather';
import Form from './component/Form';


const APIKEY = "e433fbb81f694269bfdac51a5f90b438";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWheatherData();

    this.weathericon = {
      Thunderstron: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog'

    }

  }

  getWeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weathericon.Thunderstron });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weathericon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weathericon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weathericon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weathericon.Atmosphere });
        break;
        case rangeId >= 800:
        this.setState({ icon: this.weathericon.Clear });
        break;
        case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weathericon.Clouds });
        break;
        default:
          this.setState({icon:this.weathericon.Clouds});

    }
  }
  calculateCelsius(x) {
    let value = Math.floor(x - 273.15);
    return value;
  }
  getWheatherData = async () => {
    const fetchdata = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chennai,india&appid=${APIKEY}`)
    const respone = await fetchdata.json();
    console.log(respone);
    this.setState(
      {
        city: respone.name,
        country: respone.sys.country,
        celsius: this.calculateCelsius(respone.main.temp),
        temp_max: this.calculateCelsius(respone.main.temp_max),
        temp_min: this.calculateCelsius(respone.main.temp_min),
        description: respone.weather[0].description,
      }
    );
    this.getWeatherIcon(this.weathericon,respone.weather[0].id);
  }

  render() {
    return (
      <div className="App">
 
        <Weather city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          icon={this.state.icon}
        />
      </div>
    )
  }
}

//api.openweathermap.org/data/2.5/weather?q=London

//api.openweathermap.org/data/2.5/weather?q=London,uk
export default App;
