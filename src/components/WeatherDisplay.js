import React from "react"
function WeatherDisplay({weatherInfo}){
    const weatherColor=weatherInfo.temperature >20 ?"red":"blue"
    return(
        <div>
            <p>Temperature: <span style={{color:weatherColor}}>{weatherInfo.temperature}</span></p>
            <p>Conditions: {weatherInfo.conditions}</p>
        </div>
    )
}

export default WeatherDisplay
