import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    background-color: ${props => props.theme.palette.primary.light.accent};
    color: ${props => props.theme.palette.common.white};
    padding: 14px 40px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    &:active,
    &:hover {
        opacity: .7;
    }
`;