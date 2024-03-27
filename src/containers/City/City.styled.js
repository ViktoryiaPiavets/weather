import styled from 'styled-components';
import clearImage from './../../images/clear.jpg';
import cloudyImage from './../../images/cloudy.jpg';
import mistImage from './../../images/mist.jpg';
import rainImage from './../../images/rain.jpg';
import thunderstormImage from './../../images/thunderstorm.jpg';
import snowImage from './../../images/snow.jpg';
import { theme } from '../../theme';

const CitySection = styled.section`    
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background-image: ${(props) => {
    let imageUrl;
    switch (props.$type) {
    case '01d':
    case '02d':
    case '01n':
    case '02n':
      imageUrl = clearImage;
      break;
    case '03d':
    case '04d':
    case '03n':
    case '04n':
      imageUrl = cloudyImage;
      break;
    case '09d':
    case '10d':
    case '09n':
    case '10n':
      imageUrl = rainImage;
      break;
    case '11d':
    case '11n':
      imageUrl = thunderstormImage;
      break;
    case '13d':
    case '13n':
      imageUrl = snowImage;
      break;
    case '50d':
    case '50n':
      imageUrl = mistImage;
      break;
    default:
      imageUrl = clearImage;
    }
    return `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`;
  }};
    background-size: cover;
    height: fit-content;
    padding: 60px 40px;    

    @media screen and (max-width: 800px) {
        flex-direction: column;   
        row-gap: 30px;       
    }

    @media screen and (max-width: 600px) {
        align-items: center;     
    }

    @media screen and (max-width: 400px) {
        padding: 40px 20px;
    }
`

const Title = styled.h1`
    font-size: 70px;
    text-transform: capitalize;
    color: ${theme.main};

    @media screen and (max-width: 400px) {
        font-size: 40px;  
    }
`

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {        
        flex-basis: 60%;        
    }

    @media screen and (max-width: 1000px) {        
        flex-basis: 40%;        
    }

    @media screen and (max-width: 600px) {        
        align-items: center;
        width: 70%;
        text-align: center;
    }

    @media screen and (max-width: 600px) {        
        width: 100%;        
    }
`

const Notification = styled.p`
    text-align: center;
    font-size: 20px;
    color: ${theme.warning};
`

const Time = styled.p`
    font-size: 26px;
    color: ${theme.main};
    margin-bottom: 30px;

    @media screen and (max-width: 600px) {        
        font-size: 20px;       
    }
`

export {
  CitySection,
  Title,
  LeftColumn,
  Notification,
  Time
}
