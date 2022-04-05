import styled from 'styled-components';

interface Props {
    hoverColor?: string,
    activeColor?: string,
    color?: string
}

export const Container = styled.a<Props>`
    font-size: 14px;
    text-decoration: none;
    color: ${props => props.color ? props.color : props.theme.palette.primary.light.text};
    cursor: pointer;
    transition: color .2s ease-in-out;

    & svg path {
        transition: fill .2s ease-in-out;
    }

    &:hover {
        color: ${props => props.hoverColor ? props.hoverColor : props.theme.palette.primary.light.main};

        & svg path {
            fill: ${props => props.hoverColor ? props.hoverColor : props.theme.palette.primary.light.main};
        }
    }

    &:active {
        color: ${props => props.activeColor ? props.activeColor : props.theme.palette.primary.light.accent};

        & svg path {
            fill: ${props => props.activeColor ? props.activeColor : props.theme.palette.primary.light.accent};
        }
    }
`;