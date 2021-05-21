/*
export function updateUi (location, imgUrl, start, end, duration, weatherInfo){
    
    
    let testArea = document.getElementById("result")
  
   
    testArea.innerHTML = `
        <h1 id="result-travel-title"><span>Travel Info<span></h1>
        <div id="result-text">
            <h2 id="result-text-destination">Destination</h2>
            <h2 id="result-text-destination-data">${location}</h2>
            <h3>Start Day: <span class="highlight">${start}</span></h3>
            <h3>End Day: <span class="highlight">${end}</span></h3>
            <h3>Trip duration:<span class="highlight"> ${duration} days</span></h3>
            <img id="result-photo" src=${imgUrl} alt="scene in ${location}">
        </div>
       
        <div id="result-weather">
        <h3 id="result-weather-title"><span>Local Weather for the next week</span></h3>
        </div>
    `

   
    
   const localWeatherSection = document.getElementById("result-weather-title")
   //perhaps add the first 7 days history weather around the travel date 
 
   for ( let i=weatherInfo.length ; i>0 ; i--){
       
    let {valid_date, temp, weather} = weatherInfo[i-1]

    let newDiv =  document.createElement("div")
    let resultSectionDay = document.createElement("p")
    let resultSectionTemp = document.createElement("p")
    let resultSectionWeatherIcon = document.createElement("img")
    resultSectionDay.setAttribute("class", "result-weather-date")
    resultSectionTemp.setAttribute("class", "result-weather-temp")
    resultSectionWeatherIcon.setAttribute("class", "result-weather-icon")
    newDiv.setAttribute("id", `result-travel-weather${weatherInfo.length-i+1}`)
    newDiv.setAttribute("class", "widget")
    resultSectionDay.innerText = valid_date
    resultSectionTemp.innerHTML = `${temp}<span class="temp-unit">&#8451;</span>`
    resultSectionWeatherIcon.setAttribute("src",`https://www.weatherbit.io/static/img/icons/${weather.icon}.png` )
    localWeatherSection.insertAdjacentElement("afterend", newDiv)
    newDiv.appendChild(resultSectionDay)
    newDiv.appendChild(resultSectionTemp)
    newDiv.appendChild(resultSectionWeatherIcon)
    
   }
   

}
*/