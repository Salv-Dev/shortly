import styled from 'styled-components';

export const Container = styled.section`
    background-color: ${props => props.theme.palette.primary.light.background};
    margin-top: 170px;
    padding: 0 20px 80px 20px;

    & > div:first-child {
        position: relative;
        top: calc(-181px / 2);
    }

    @media (min-width: 700px) {
        padding: 0 40px 80px 40px;

        & > div:first-child {
            top: calc(-111px / 2);
        }
    }

    @media (min-width: 900px) {
        padding: 0 100px 80px 100px;
    }

    @media (min-width: 1200px) {
        & > div:first-child {
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: -20px 0 20px 0;
    padding: 0 20px 60px 20px;
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

export const BackgroundIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: calc(-75px / 2);
    left: 50%;
    transform: translate(-50%, 0);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.common.violet};
`;