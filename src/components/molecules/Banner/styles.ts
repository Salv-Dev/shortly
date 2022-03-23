import styled from 'styled-components';

export const Container  = styled.section``;

export const Bg = styled.div`
    background: url('/images/illustration-working.svg') no-repeat;
    background-size: cover;
    background-position: -25% 0%;
    min-height: 325px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 20px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: -2px;
    line-height: 2.2rem;
    color: ${props => props.theme.palette.primary.light.main};
    margin-bottom: 10px;
`;

export const Desc = styled.p`
    color: ${props => props.theme.palette.primary.light.text};
    text-align: center;
    line-height: 1.4rem;
`;