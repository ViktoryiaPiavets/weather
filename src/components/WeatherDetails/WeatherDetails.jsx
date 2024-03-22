import { Container, Image, Text, Item } from './WeatherDetails.styled';
import humidityImage from './../../images/humidity.png';
import windImage from './../../images/wind.png';  

const WeatherDetails = ({ humidity, wind, pressure, clouds }) => {
    return (
        <Container>
            <Item>
                <Image>
                    <img src={humidityImage} alt={'Drops icon'}/>
                </Image>
                <Text>{`Humidity ${humidity}%`}</Text>
            </Item>
            <Item>
                <Image>
                    <img src={windImage} alt={'Wind icon'} />
                </Image>
                <Text>{`Wind ${wind} m/s`}</Text>
            </Item>
            <Item>
                <Image>
                    <img src={windImage} alt={'Pressure icon'} />
                </Image>
                <Text>{`Pressure ${pressure} hPa`}</Text>
            </Item>
            <Item>
                <Image>
                    <img src={windImage} alt={'Clouds icon'} />
                </Image>
                <Text>{`Cloudiness ${clouds}%`}</Text>
            </Item>
        </Container>
    )
}

export {
    WeatherDetails
}