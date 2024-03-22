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

    > img {
        width: 30px;
        height: 30px;
    }
`

const Text = styled.p`
    font-size: 18px;
`

const Item = styled.div`
    display: flex;
    width: 50%;
`

export {
    Container,
    Image,
    Text,
    Item
}
