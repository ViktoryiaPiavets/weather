import styled from 'styled-components';
import sunnyImage from './../../images/sunny.jpg';
import { theme } from '../../theme';

const CitySection = styled.section`
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background-image: url(${sunnyImage});
    background-size: cover;
    height: 70vh;
    padding: 60px 40px;
`

const Title = styled.h1`
    font-size: 50px;
    text-transform: capitalize;
    color: ${theme.main};
`

const LeftColumn = styled.div`
    flex-basis: 45%;
`

const Notification = styled.p`
    text-align: center;
    font-size: 20px;
    color: ${theme.warning};
`

const Time = styled.p`
    font-size: 24px;
    color: ${theme.main};
`

export {
    CitySection,
    Title,
    LeftColumn,
    Notification,
    Time
}