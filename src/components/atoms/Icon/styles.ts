import styled from 'styled-components';

interface Props {
    size?: number,
    color?: string
}

export const Container = styled.div<Props>`
    display: inline-block;
    position: relative;
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    vertical-align: middle;

    & svg {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
    }

    & svg path {
        fill: ${props => props.color};
    }
`;