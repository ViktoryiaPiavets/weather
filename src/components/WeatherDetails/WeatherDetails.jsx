import { Container, Image, Text, Item } from './WeatherDetails.styled';
import { ReactComponent as HumidityImage } from './../../images/humidity.svg';
import { ReactComponent as WindImage } from './../../images/wind.svg';
import { ReactComponent as CloudsImage } from './../../images/clouds.svg';
import { ReactComponent as PressureImage } from './../../images/pressure.svg';

const WeatherDetails = ({ humidity, wind, pressure, clouds }) => {
  return (
    <Container>
      <Item>
        <Image><HumidityImage /></Image>
        <Text>{`Humidity ${humidity}%`}</Text>
      </Item>
      <Item>
        <Image><WindImage /></Image>
        <Text>{`Wind ${wind} m/s`}</Text>
      </Item>
      <Item>
        <Image><PressureImage /></Image>
        <Text>{`Pressure ${pressure} hPa`}</Text>
      </Item>
      <Item>
        <Image><CloudsImage /></Image>
        <Text>{`Cloudiness ${clouds}%`}</Text>
      </Item>
    </Container>
  )
}

export {
  WeatherDetails
}
