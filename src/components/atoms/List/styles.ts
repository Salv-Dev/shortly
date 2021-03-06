import styled from 'styled-components';

interface Props {
    align?: string,
    horizontal?: boolean
}

export const Container = styled.ul<Props>`
    display: flex;
    flex-direction: ${props => props.horizontal ? 'row' : 'column'};
    text-align: ${props => props.align};
    align-items: ${props => props.align};
    gap: 10px;
    list-style: none;
`;

export const Title = styled.h4`
    font-size: 14px;
    margin-bottom: 10px;
`;