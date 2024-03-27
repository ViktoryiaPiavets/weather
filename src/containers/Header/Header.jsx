import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import umbrellaImage from './../../images/umbrella.png';
import { Wrapper, Input, Location, TemperatureToggler, RightBlock, Logo, MoonToggler, SunToggler } from './Header.styled';
import { setCityName, changeMetrics, updateCoords } from '../../actions';
import { getCurrentLocation } from '../../utils';
import { useTheme } from '../../components/Theme/ThemeProvider';


const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const metrics = useSelector((state) => state.city.metrics);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  }

  const onSearch = (e) => {
    if (e.keyCode === 13 && searchValue.trim()) {
      dispatch(setCityName(searchValue.toLowerCase()));
      dispatch(updateCoords({}));
    }
  }

  const toggleMetrics = () => {
    if (metrics === 'C') {
      dispatch(changeMetrics('F'));
    } else {
      dispatch(changeMetrics('C'));
    }
  }

  const searchCurrentLocation = () => {
    setSearchValue('');
    getCurrentLocation().then(({ latitude, longitude }) => {
      dispatch(updateCoords({ latitude, longitude }));
    }).catch((error) => {
      console.error('Error getting location:', error);
    });
  }

  return (
    <Wrapper>
      <Logo src={umbrellaImage} alt={'Umbrella'}/>
      <Input onChange={onSearchChange} value={searchValue} onKeyDown={onSearch} placeholder={'Search city'} />
      <RightBlock>
        <TemperatureToggler onClick={toggleMetrics}>{metrics === 'C' ? '°F' : '°C'}</TemperatureToggler>
        { theme === 'light' ? <MoonToggler onClick={toggleTheme} /> : <SunToggler onClick={toggleTheme} /> }
        <Location onClick={searchCurrentLocation} />
      </RightBlock>
    </Wrapper>
  )
}

export {
  Header
}
