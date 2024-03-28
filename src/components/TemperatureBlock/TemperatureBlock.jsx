import { Container, Label, Degree, Range, WeatherIcon } from './TemperatureBlock.styled';
import { convertDegrees } from '../../utils';

const TemperatureBlock = ({ iconPath, temperature, metrics, min, max, feelsLike }) => {
  return (
    <Container>
      <Label>Today</Label>
      <WeatherIcon src={`https://openweathermap.org/img/wn/${iconPath}@4x.png`} alt={'Weather icon'}/>
      <Degree>{`${convertDegrees(metrics, temperature)} °${metrics}`}</Degree>
      {
        Math.round(min) === Math.round(max) ?
          <Range>{`Feels like ${convertDegrees(metrics, feelsLike)} °${metrics}`}</Range> :
          <Range>{`${convertDegrees(metrics, min)} °${metrics} - ${convertDegrees(metrics, max)} °${metrics}`}</Range>
      }
    </Container>
  );
};

export {
  TemperatureBlock
}
