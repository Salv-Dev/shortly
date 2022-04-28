import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.palette.common.white};
    border-radius: ${props => props.theme.borderRadius};
    padding: 30px;

    &:not(:last-child) {
        margin-bottom: 80px;
    }

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: -80px;
        left: 50%;
        right: 0;
        transform: translate(-50%, 0);
        width: 8px;
        height: 80px;
        background-color: ${props => props.theme.palette.primary.light.accent};
    }

    @media (min-width: 900px) {
        min-width: 200px;
        max-width: 400px;
        justify-content: flex-start;

        &:not(:last-child) {
            margin-bottom: 0;
        }

        &:not(:last-child)::after {
            left: auto;
            right: -600px;
            bottom: 50%;
            transform: translate(-50%, 0);
            width: 400px;
            height: 8px;
        }

        &:nth-child(2)::after {
            display: none;
        }
    }

    @media (min-width: 1400px) {
        height: 300px;
        &:not(:last-child)::after {
            right: -800px;
            width: 533px;
        }
    }
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -10px;

    @media (min-width: 900px) {
        margin-top: 0
    }
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 2rem;
    color: ${props => props.theme.palette.primary.light.main};
    text-align: center;

    @media (min-width: 900px) {
        text-align: left;
    }
`;

export const Desc = styled.p`
    font-size: 14px;
    color: ${props => props.theme.palette.primary.light.text};
    text-align: center;
    line-height: 1.4rem;
    margin-bottom: 10px;

    @media (min-width: 900px) {
        text-align: left;
    }
`;