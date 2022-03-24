import styled from 'styled-components';

interface Props {
    variant?: string
}

export const Container = styled.button<Props>`
    border: 3px solid ${props => props.theme.palette.primary.light.accent};
    background-color: ${props => props.theme.palette.primary.light.accent};
    color: ${props => props.theme.palette.common.white};
    padding: 15px 40px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: ${props => props.variant == 'rounded' ? '30px' : props.theme.borderRadius};
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    &:active,
    &:hover {
        opacity: .7;
    }
`;