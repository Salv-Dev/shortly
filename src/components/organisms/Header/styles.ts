import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 40px 20px;

    @media (min-width: 700px) {
        padding: 40px;
    }

    @media (min-width: 900px) {
        padding: 40px 100px;
    }

    @media (min-width: 1200px) {
        padding: 40px 20%;
    }
`;

export const Label = styled.label`
    z-index: 3;

    & ~ input {
        display: none;
    }

    & ~ input ~ div {
        display: none;
    }

    & ~ input:checked ~ div {
        display: flex;
    }
`;

export const WrapperDesktopMenu = styled.div`
    display: none;

    @media (min-width: 700px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-left: 40px;
    }
`;

export  const Login = styled.div`
    display: flex;
    gap: 20px;
`;