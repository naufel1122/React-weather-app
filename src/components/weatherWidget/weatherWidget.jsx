import './weatherWidget.css'

const WeatherCard = ({weatherData})=>{

    return(
        <div className='Card'>
            City Name: {weatherData?.name}
            <br />
            <div className='temp' >
            {weatherData?.main?.temp}°C
            </div>
            <br />
            Humidity:{weatherData?.main?.humidity}
            <br />
            Feels Like:{weatherData?.main?.feels_like}
            <br />
            Pressure :{weatherData?.main?.pressure}
            <br />
            Weather:{weatherData?.weather[0]?.description}
        </div>
    )
    
}
export default WeatherCard;