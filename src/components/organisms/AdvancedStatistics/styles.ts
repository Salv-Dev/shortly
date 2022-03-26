import styled from 'styled-components';

export const Container = styled.section`
    height: 500px;
    background-color: ${props => props.theme.palette.primary.light.background};
    margin-top: 170px;
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: -20px 0 20px 0;
    padding: 0 20px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    letter-spacing: -1px;
    line-height: 2.2rem;
    color: ${props => props.theme.palette.primary.light.main};
`;

export const Desc = styled.p`
    font-size: 14px;
    color: ${props => props.theme.palette.primary.light.text};
    text-align: center;
    line-height: 1.4rem;
`;