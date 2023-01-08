import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'
function App() {
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
        latitude:0,
        longitude:0,
        location:"",
        time:"",
        day2temp:"",
        day3temp:"",
        day4temp:"",
        day5temp:"",
        day6temp:"",
        day7temp:"",
    })
    const [foredata, setforedata] = useState({
        date:"",
    })

   const  handleKeyPress = (e) => {
    // console.log("entering handfle")
        if (e.key === 'Enter') {
         handleClick();
        }
      }

    const handleClick = () => {
        //api for city==""?"hyderabad":city
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3910597ed39b04f5486e7d33bec4f0a8`)
            .then((response) => {
                console.log("response",response);
                console.log("response corrdinates lat",response.data.coord.lat);

                setData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                    latitude:response.data.coord.lat,
                    longitude:response.data.coord.lon,
                    location:response.data.name,
                    
                })
            })
            .catch((error)=>{
            alert("enter a valid city");
            }
            )
            // console.log("response latitude",data.latitude);
            // console.log("response longitude",data.longitude);
            // console.log("response longitude",data.location);

            //api for forecast data
            
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=3910597ed39b04f5486e7d33bec4f0a8`)
            .then((response) => {
                setforedata({
                    date:response.data.list[0].dt_txt,
                    day2temp:response.data.list[6].main.temp,
                    day3temp:response.data.list[12].main.temp,
                    day4temp:response.data.list[18].main.temp,
                    day5temp:response.data.list[24].main.temp,
                    day6temp:response.data.list[30].main.temp,
                    day7temp:response.data.list[36].main.temp,


                    // time:response

                })
               
            })
    }

    return (
        <>
            
            <div className='container text-center my-3 text-primary'>
                <h1>Weather App Using React JS</h1>
                <input type="text" className='from-control' value={city} onChange={(e) => {
                    setCity(e.target.value);
                }} />
                <button className='btn btn-primary mx-2' type='submit' onClick={handleClick} >Get Temperature</button>

            </div>
            

            <ShowTemp text ={data} foredata={foredata}></ShowTemp>
        </>
    )
}

export default App
