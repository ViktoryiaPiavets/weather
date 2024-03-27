import { Container, Label, Degree, Range, WeatherIcon } from './TemperatureBlock.styled';
import { convertDegrees } from '../../utils';

const TemperatureBlock = ({ iconPath, temperature, metrics, min, max }) => {
  return (
    <Container>
      <Label>Today</Label>
      <WeatherIcon src={`https://openweathermap.org/img/wn/${iconPath}@4x.png`} alt={'Weather icon'}/>
      <Degree>{`${convertDegrees(metrics, temperature)} °${metrics}`}</Degree>
      <Range>{`${convertDegrees(metrics, min)} °${metrics} - ${convertDegrees(metrics, max)} °${metrics}`}</Range>
    </Container>
  );
};

export {
  TemperatureBlock
}
