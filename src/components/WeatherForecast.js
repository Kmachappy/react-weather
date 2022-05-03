import React from "react"
import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"
const WeatherForecast =(props)=>{
    return(
        <div className="weather">
        <WeatherIcon img={props.img} />

        {/* props.conditon  = conditionss*/}
        <WeatherData conditions={props.conditions} time={props.time} />
        </div>
    )
}


export default WeatherForecast