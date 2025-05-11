import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1442213391790-7656f6e368b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG92ZXJjYXN0JTIwY2xvdWRzfGVufDB8fDB8fHww"

    const HOT_URL = "https://media.istockphoto.com/id/2153190548/photo/city-hot-temperature-thermometer-on-yellow-sky-with-sun-shining-in-summer-show-higher-weather.jpg?s=612x612&w=0&k=20&c=u-Z3TdfvsAPUnyg2tklPdReqfkW-MTmvLjiFzzoVzag=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENPTEQlMjB0ZW1wZXJhdHV0ZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB0ZW1wZXJhdHV0ZXxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 20 
            ? HOT_URL 
            : COLD_URL
        }

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
             info.humidity > 80 
             ? <LightModeIcon /> 
             : info.temp > 20 
             ? <LightModeIcon /> 
             : <AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" color= 'text.secondary' component={"span"}>
         <div>Temperature = {info.temp}&deg;C</div>
         <div>Humidity = {info.humidity}</div>
         <div>Min Temp = {info.tempMin}&deg;C</div>
         <div>Max Temp= {info.tempMax}&deg;C</div>
         <div>The weather can be described as <i>{info.weather} </i> and feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}