import React from "react"
import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"
const WeatherForecast =(props)=>{
    return(
        <div className="weather">
        <WeatherIcon img={props.img} />

        {/* props.conditon  = conditionss*/}
        <WeatherData condition={props.conditionss} time={props.time} />
        </div>
    )
}


export default WeatherForecast