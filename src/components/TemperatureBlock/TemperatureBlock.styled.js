import styled from 'styled-components';
import { theme } from '../../theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 20%;
    height: 80%;
    border-radius: 20px;
    background: ${theme.primary};
    padding: 20px;
    color: ${theme.main};
    align-self: center;
`

const Label = styled.p`
    width: fit-content;
    background: #72668a;
    border-radius: 20px;
    padding: 10px 30px;
    align-self: flex-start;
`

const Degree = styled.p`    
    font-size: 50px;
    margin: 0 0 20px 0;
`

const Range = styled.div`
    font-size: 30px;
`

export {
    Container,
    Label,
    Degree,
    Range
}