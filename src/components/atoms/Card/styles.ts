import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    background-color: ${props => props.theme.palette.common.white};
    border-radius: ${props => props.theme.borderRadius};
`;

export const WrapperTitle = styled.div``;

export const Title = styled.h3``;

export const Desc = styled.p``;