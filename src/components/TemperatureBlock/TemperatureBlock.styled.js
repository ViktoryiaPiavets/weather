import styled from 'styled-components';
import { theme } from '../../theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 20%;
    height: 80%;
    border-radius: 20px;
    background: linear-gradient(317.63deg, #353589 -7.42%, #9a9aff 120.45%);
    padding: 30px 20px;
    color: ${theme.main};
    align-self: end;

    @media screen and (max-width: 800px) {        
        flex-direction: row;
        width: 100%;      
    }
    
    @media screen and (max-width: 600px) {        
        flex-direction: column;
        width: 70%;
        align-self: center;
    }

    @media screen and (max-width: 500px) {        
        width: 100%;        
    }   
`

const Label = styled.p`
    width: fit-content;
    background: rgb(114, 102, 138);
    background-color: #353589;
    border-radius: 20px;
    padding: 10px 30px;
    align-self: flex-start;
    margin: 0;

    @media screen and (max-width: 700px) {        
        display: none;     
    }

    @media screen and (max-width: 600px) {        
        display: block;
    }
`

const Degree = styled.p`    
    font-size: 50px;
    margin: 0 0 20px 0;

    @media screen and (max-width: 1000px) {        
        font-size: 40px;
        flex-grow: 1;        
    }

    @media screen and (max-width: 800px) {        
        margin: 0;       
    }

    @media screen and (max-width: 600px) {        
        margin: 20px;
    }

    @media screen and (max-width: 400px) {        
        font-size: 30px;
    }
`

const Range = styled.div`
    font-size: 30px;

    @media screen and (max-width: 1000px) {        
        font-size: 24px;
        flex-grow: 1;
    }

    @media screen and (max-width: 400px) {        
        font-size: 20px;
    }
    
`

const WeatherIcon = styled.img`
    @media screen and (max-width: 800px) {        
        width: 120px;
        height: 120px;
    }

    @media screen and (max-width: 400px) {        
        width: 100px;
        height: 100px;
    }
`

export {
  Container,
  Label,
  Degree,
  Range,
  WeatherIcon
}
