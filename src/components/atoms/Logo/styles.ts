import styled from 'styled-components';

interface Props {
    fill?: string
}

export const Container = styled.a<Props>`
    display: block;
    cursor: pointer;

    & svg path {
        fill: ${props => props.fill ? props.fill : ''};
    }
`;

export const Image = styled.img``;