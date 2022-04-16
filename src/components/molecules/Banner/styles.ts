import styled from 'styled-components';

export const Container  = styled.section`
    margin-top: -30px;
    margin-bottom: 40px;
    overflow: hidden;

    @media (min-width: 600px) {
        position: relative;
    }

    @media (min-width: 700px) {
        margin-top: 0;
    }

    @media (min-width: 1600px) {
        max-width: 900px;
        margin: 0 auto;
        overflow: inherit;
        height: 500px;
    }
`;

export const Bg = styled.div`
    background: url('/images/illustration-working.svg') no-repeat;
    background-size: cover;
    background-position: -50% 0%;
    min-height: 300px;

    @media (min-width: 460px) {
        background-position: center;
        background-size: auto 300px;
    }

    @media (min-width: 600px) {
        background-position: right;
        margin-right: -150px;
    }

    @media (min-width: 700px) {
        margin-right: -100px;
    }

    @media (min-width: 900px) {
        min-height: 350px;
        background-size: auto 350px;
    }

    @media (min-width: 1200px) {
        min-height: 400px;
        background-size: auto 400px;
    }

    @media (min-width: 1400px) {
        min-height: 500px;
        background-size: auto 500px;
    }

    @media (min-width: 1600px) {
        margin-right: -350px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 30px;
    padding: 0 20px;

    @media (min-width: 600px) {
        width: 50%;
        align-items: flex-start;
    }

    @media (min-width: 700px) {
        padding: 0 40px;
        width: 45%;
    }

    @media (min-width: 900px) {
        width: 40%;
        height: 100%;
        justify-content: center;
        padding: 0 100px;
        margin: 0;
    }

    @media (min-width: 1200px) {
        width: 500px;
        padding: 0;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    @media (min-width: 600px) {
        position: absolute;
        top: 0;
        left: 0;
    }

    @media (min-width: 1200px) {
        max-width: 900px;
        left: 50%;
        transform: translate(-50%, 0);
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: -2px;
    line-height: 2.2rem;
    color: ${props => props.theme.palette.primary.light.main};

    @media (min-width: 600px) {
        text-align: left;
    }

    @media (min-width: 700px) {
        font-size: 2.1rem;
    }

    @media (min-width: 900px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1400px) {
        font-size: 3rem;
        line-height: 2.5rem;
    }
    
`;

export const Desc = styled.p`
    color: ${props => props.theme.palette.primary.light.text};
    text-align: center;
    line-height: 1.4rem;
    margin-bottom: 10px;

    @media (min-width: 600px) {
        text-align: left;
    }
`;