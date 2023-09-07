import './weatherWidget.css'

const WeatherCard = ({weatherData})=>{

    return(
        <div className='Card'>
            <div className='CityName'>
            City Name: {weatherData?.name}
            </div>
            <br />
            <div className='temp' >
            {weatherData?.main?.temp}°C
            </div>
            <br />
            <div className='Humidity'>
            Humidity:{weatherData?.main?.humidity}
            </div>
            <br />
            <div className='Humidity'>
            Feels Like:{weatherData?.main?.feels_like}
            </div>
            <br />
            <div className='Humidity'>
            Pressure :{weatherData?.main?.pressure}
            </div>
            <br />
            <div className='Humidity'>
            Weather:{weatherData?.weather[0]?.description}
            </div>
        </div>
    )
    
}
export default WeatherCard;