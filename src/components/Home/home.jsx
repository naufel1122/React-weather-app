import axios from 'axios';
import { useRef, useState } from 'react';
import WeatherCard from '../weatherWidget/weatherWidget';
import './home.css'

const Home = () => {

    // not recommended
    // const [cityName,setCityName]= useState("");

    const [weatherData, setWeatherData] = useState([]);


    const CityNameRef = useRef(null)


    const Submit = async (e) => {
        e.preventDefault();
        console.log('Submit');

        console.log('CityName:', CityNameRef.current.value);

        // not recommended
        // let cityName = document.querySelector("#CityName").value;


        let API_KEY = 'e0f99c494c2ce394a18cc2fd3f100543'

        try {
            const response = await axios.get
                (`https://api.openweathermap.org/data/2.5/weather?q=${CityNameRef.current.value}&appid=${API_KEY}&units=metric`);

            console.log(response.data);

            setWeatherData([response.data, ...weatherData ])
            //    `current temprature of ${response.data.name} is ${response.data.main.temp}°C`
        } catch (error) {
            // handle error
            console.log(error.data);
        }
    }




    return (<div className='form-container'>
        <form className='form' onSubmit={Submit}>
            <label htmlFor="CityName">Enter City Name:</label>
            <input type="text" id="CityName"
                required minLength={4}
                maxLength={20}
                // onChange={(e) => setCityName(e.target.value)} 
                ref={CityNameRef} />
            <br />
            <button type="submit" >Submit</button>
        </form>

        

        {weatherData.length ?
            weatherData.map((eachWeatherData, index ) => {
                return <WeatherCard key={index} weatherData={eachWeatherData} />
            })
            : <div className='No-data'>No Data Founded</div>}


    </div>
    )
}

export default Home;