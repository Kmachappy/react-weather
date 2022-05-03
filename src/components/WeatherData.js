import React from "react";

const WeatherData = props =>{
    return(
        <>
        {/* condition */}
        <p><span>conditions:</span> {props.conditions}</p>
        <p><span>time:</span> {props.time}</p>
        </>
        
    )
}


export default WeatherData