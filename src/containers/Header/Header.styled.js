import styled from 'styled-components';
import { theme } from '../../theme';

const Wrapper = styled.header`
    padding: 0 0 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;    
`

const RightBlock = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
`

const StyledInput = styled.input`
    width: 30%;
    height: 30px;
    border: 2px solid ${theme.primary};
    outline: none;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;

    &:focus {
        border: 3px solid ${theme.primary};
    }
`

const Location = styled.button`
    background: ${theme.primary};
    border: none;
    border-radius: 20px;
    height: 36px;
    width: 150px;
    cursor: pointer;
    color: ${theme.main};
    font-size: 16px;

    &:hover {
        scale: 1.1;
    }
`

const TemperatureToggler = styled.button`
    background: ${theme.primary};
    border-radius: 20px;
    border: none;
    height: 36px;
    width: 36px;
    cursor: pointer;
    color: ${theme.main};
    font-size: 16px;

    &:hover {
        scale: 1.1;
    }
`

const ThemeToggler = styled.img`
    width: 36px;
    height: 36px;
    cursor: pointer;

    &:hover {
        scale: 1.1;
    }
`

export {
    Wrapper,
    StyledInput as Input,
    Location,
    RightBlock,
    TemperatureToggler,
    ThemeToggler
}