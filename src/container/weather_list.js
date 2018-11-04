import React, { Component } from "react";
// import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from "../components/charts";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather(data) {
    const { name } = data.city;
    const Temperature = data.list.map(weather => weather.main.temp);
    const Pressure = data.list.map(weather => weather.main.pressure);
    const Humidity = data.list.map(weather => weather.main.humidity);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={Temperature} color="red" />
        </td>
        <td>
          <Chart data={Pressure} color="green" />
        </td>
        <td>
          <Chart data={Humidity} color="black" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
