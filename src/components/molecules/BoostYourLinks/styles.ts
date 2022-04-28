import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px;
    background: url('/images/bg-boost-mobile.svg') no-repeat;
    background-position: right top;
    background-color: ${props => props.theme.palette.common.violet};

    @media (min-width: 900px) {
        background: url('/images/bg-boost-desktop.svg') no-repeat;
        background-size: cover;
        background-position: right top;
        background-color: ${props => props.theme.palette.common.violet};
    }
`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.palette.common.white};
    margin-bottom: 20px;

    @media (min-width: 900px) {
        font-size: 30px;
    }
`;