import styled from 'styled-components';
import { theme } from '../../theme';
import { css } from 'styled-components'
import { ReactComponent as SunImage } from './../../images/sun.svg';
import { ReactComponent as MoonImage } from './../../images/moon.svg';
import { ReactComponent as GeoImage } from './../../images/geo.svg';


const commonTogglerStyles = css`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        scale: 1.1;
    }
`
const commonDimensions = css`
    height: 36px;
    width: 36px;
`
const Wrapper = styled.header`
    padding: 0 50px 40px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 700px) {
        flex-direction: column-reverse;
        row-gap: 30px;
    }

    @media screen and (max-width: 500px) {
        padding: 0 0 30px 0;
    }
`

const RightBlock = styled.div`    
    display: flex;
    justify-content: space-between;
`

const StyledInput = styled.input`
    width: 30%;
    height: 46px;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, .2), 0 24px 20px -24px rgba(71, 82, 107, .1);

    &:focus {
        border: 2px solid ${theme.primary};
    }

    @media screen and (max-width: 900px) {
        width: 40%; 
    }

    @media screen and (max-width: 700px) {
        width: 70%;
    }

    @media screen and (max-width: 400px) {
        width: 90%;
    }
`

const Location = styled(GeoImage)`
    ${commonDimensions};     
    cursor: pointer;
    fill: ${theme.primary};   

    &:hover {
        scale: 1.1;
    }
`

const TemperatureToggler = styled.button`
    ${commonDimensions};
    background: ${theme.primaryGradient};
    border-radius: 20px;
    border: none;    
    cursor: pointer;
    color: ${theme.main};
    font-size: 16px;
    margin-right: 20px;

    &:hover {
        scale: 1.1;
    }
`

const MoonToggler = styled(MoonImage)`
    ${commonTogglerStyles};
    fill: ${theme.primary};
    stroke: none;
`

const SunToggler = styled(SunImage)`
    ${commonTogglerStyles};
    ${commonDimensions};
    fill: ${theme.main};
`

const Logo = styled.img`
    width: 45px;
    height: 45px;

    @media screen and (max-width: 900px) {
        display: none;  
    }
`

export {
  Wrapper,
  StyledInput as Input,
  Location,
  RightBlock,
  TemperatureToggler,
  MoonToggler,
  SunToggler,
  Logo
}
