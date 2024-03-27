import styled from 'styled-components';
import { theme } from '../../theme';

const Container = styled.div`    
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    background: ${theme.main};
    justify-content: space-between;
    padding: 20px;
    border-radius: 20px;
    
    @media screen and (max-width: 1000px) {        
        flex-direction: column;      
    }

    @media screen and (max-width: 800px) {        
        flex-direction: row;
    }

    @media screen and (max-width: 700px) {        
        flex-direction: column;
        width: 70%;
    }

    @media screen and (max-width: 500px) {        
        width: 100%;
    }

    @media screen and (max-width: 500px) {        
        padding: 20px 10px;
    }
`

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    margin-right: 20px;
    background: ${theme.primary};
    border-radius: 5px;
    
    > svg {
        width: 30px;
        height: 30px;
        fill: ${theme.main};
     }

    @media screen and (max-width: 400px) {
        height: 40px;
        width: 40px;

        > svg {
            width: 20px;
            height: 20px;
        }
    }

    @media screen and (max-width: 400px) {
        margin-right: 10px;
    }    
`

const Text = styled.p`
    font-size: 18px;

    @media screen and (max-width: 600px) {        
        font-size: 16px;
    }
`

const Item = styled.div`
    display: flex;
    width: 50%;
    align-items: center;

    @media screen and (max-width: 1000px) {        
        width: 100%;        
    }

    @media screen and (max-width: 800px) {        
        width: 50%;
    }

    @media screen and (max-width: 700px) {        
        width: 100%;
    }
`

export {
  Container,
  Image,
  Text,
  Item
}
