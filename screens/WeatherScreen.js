import React from "react";
import { 
  StyleSheet,
  Text,
  View
} from "react-native";

import { API_KEY } from '../utils/settings';

import Weather from '../components/Weather';

export default class WeatherScreen extends React.Component {
  
  state = {
    isLoading: true,
    temperatur: 0,
    weatherCondition: null,
    error: null,
  };


  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: "Error Getting Weather Condition"
        })
      }
      );
  }

  fetchWeather(lat, lon){
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
    .then(res => res.json())
    .then(json => { 
      
      this.setState({
        weatherCondition: json.weather[0].main,
        temperatur: json.main.temp,
        isLoading: false,
      })
      console.log(json)
    })
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text> Fetching the Weather </Text>
        ) : (
          <Weather weather={this.state.weatherCondition} temperature={this.state.temperatur} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});