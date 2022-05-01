import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  // console.log(weatherData)
  const allWeatherData = weatherData.map((element,index)=>{
    return  <WeatherForecast img={element.img} condition={element.conditions} time={element.time} key={index} />

  })
  
  
  return (
    <div className="App">
      <h1>weatherData</h1> 
      <section>
        {allWeatherData}
      </section>
    </div>
  );
}
